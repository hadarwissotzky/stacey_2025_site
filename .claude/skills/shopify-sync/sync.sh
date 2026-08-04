#!/usr/bin/env bash
# shopify-sync: headless pull/push for the live Dawn theme.
# Reads store/theme/token from a gitignored env file so auth is done ONCE, not per-session.
#
#   ./sync.sh pull  <file> [file ...]   # pull ONLY these files from live into ./.live-check/ and diff vs repo
#   ./sync.sh push  <file> [file ...]   # push ONLY these files to the live theme (--allow-live --nodelete)
#   ./sync.sh env                        # print resolved store/theme + token status (no secret values)
#
# Config resolution (first found wins):
#   1. env vars already set in the shell
#   2. <repo>/.shopify-sync.env  (gitignored; see .example)
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
ENV_FILE="$REPO_ROOT/.shopify-sync.env"

# Load the env file if present (does not override vars already set in the shell).
if [ -f "$ENV_FILE" ]; then
  set -a
  # shellcheck disable=SC1090
  source "$ENV_FILE"
  set +a
fi

STORE="${SHOPIFY_STORE:-1fb93f.myshopify.com}"
THEME="${SHOPIFY_THEME:-163348971803}"
# SHOPIFY_CLI_THEME_TOKEN (a shptka_ Theme Access token) is read by the CLI directly.
TOKEN="${SHOPIFY_CLI_THEME_TOKEN:-}"

die() { echo "ERROR: $*" >&2; exit 1; }

require_token() {
  if [ -z "$TOKEN" ]; then
    cat >&2 <<EOF
No SHOPIFY_CLI_THEME_TOKEN found.
One-time setup:
  1. Shopify admin (store $STORE) -> Apps -> install "Theme Access" -> generate a token (starts shptka_).
  2. cp "$REPO_ROOT/.shopify-sync.env.example" "$ENV_FILE" and paste the token in.
The .env file is gitignored; the token never enters git or Claude's context.
EOF
    exit 1
  fi
}

cmd="${1:-}"; shift || true

case "$cmd" in
  env)
    echo "store: $STORE"
    echo "theme: $THEME"
    echo "token: $([ -n "$TOKEN" ] && echo SET || echo MISSING)"
    echo "env file: $([ -f "$ENV_FILE" ] && echo "$ENV_FILE" || echo "(none)")"
    ;;

  pull)
    require_token
    [ "$#" -ge 1 ] || die "pull needs at least one file path"
    DEST="$REPO_ROOT/.live-check"
    mkdir -p "$DEST"   # CLI errors if the dest dir is missing
    only=(); for f in "$@"; do only+=(--only "$f"); done
    echo ">> pulling ${#} file(s) from live theme $THEME into .live-check/"
    shopify theme pull --store "$STORE" --theme "$THEME" --path "$DEST" "${only[@]}"
    echo
    for f in "$@"; do
      if [ -f "$DEST/$f" ] && [ -f "$REPO_ROOT/$f" ]; then
        echo "=== diff (repo vs LIVE) : $f ==="
        diff -u "$REPO_ROOT/$f" "$DEST/$f" && echo "(identical)"
      else
        echo "=== $f : present live=$([ -f "$DEST/$f" ] && echo y || echo n) repo=$([ -f "$REPO_ROOT/$f" ] && echo y || echo n) ==="
      fi
    done
    echo
    echo ">> If live differs, re-apply your edit onto the .live-check copy BEFORE pushing. Live is source of truth."
    ;;

  push)
    require_token
    [ "$#" -ge 1 ] || die "push needs at least one file path"
    only=(); for f in "$@"; do
      [ -f "$REPO_ROOT/$f" ] || die "file not found in repo: $f"
      only+=(--only "$f")
    done
    echo ">> pushing ${#} file(s) to LIVE theme $THEME on $STORE:"
    printf '   %s\n' "$@"
    shopify theme push --store "$STORE" --theme "$THEME" --allow-live --nodelete "${only[@]}"
    echo
    echo ">> Pushed. Storefront may serve a STALE cache — verify by pulling the file back (./sync.sh pull $1)"
    echo "   or open the page in the theme editor and Save. Then screenshot with the /browse skill."
    ;;

  *)
    die "usage: sync.sh {pull|push|env} <file> ..."
    ;;
esac
