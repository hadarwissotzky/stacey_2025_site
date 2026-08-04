#!/usr/bin/env bash
# seo-triage verify: fetch a live URL and print the SEO facts a crawl report flags.
# Mechanical re-check of a remediated URL so regressions get caught (see the
# /products/book-virtual-appointment link that broke twice). Reads public storefront only.
#
#   ./verify.sh <url> [url ...]
#
# Prints per URL: redirect chain + final status, <title> + length, canonical, meta robots,
# og:title/og:image/og:url, JSON-LD block count, hreflang count, and >>FLAGs for obvious problems.
set -euo pipefail
[ "$#" -ge 1 ] || { echo "usage: verify.sh <url> ..." >&2; exit 1; }
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Shopify serves compressed bodies and rejects an empty UA — always send both.
UA='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36'
CURL=(curl -sL --compressed -A "$UA" --max-time 25 --retry 1)

for url in "$@"; do
  echo "================================================================"
  echo "URL: $url"
  # Redirect chain (status per hop, ignoring 1xx) + final resolved status/url. Tolerant of failures.
  headers=$("${CURL[@]}" -I "$url" || true)
  chain=$(printf '%s' "$headers" | grep -iE '^HTTP/' | awk '$2 !~ /^1/ {print $2}' | paste -sd' ' -)
  final=$("${CURL[@]}" -o /dev/null -w '%{http_code} %{url_effective}' "$url" || echo "000 -")
  echo "redirect chain : ${chain:-<none>}"
  echo "final          : $final"

  # Fetch body once (tolerantly), parse head tags with parse.py.
  # NOTE: parse.py MUST be a separate file — `python3 - <<HEREDOC` would steal stdin from the pipe.
  body=$("${CURL[@]}" "$url" || true)
  printf '%s' "$body" | python3 "$SCRIPT_DIR/parse.py"

  # Final HTTP status flag (outside python since it needs the curl code).
  code=$(printf '%s' "$final" | awk '{print $1}')
  case "$code" in
    200) ;;
    3*) echo ">>FLAG: final status $code (still redirecting)";;
    *)  echo ">>FLAG: final status $code (broken / not OK)";;
  esac
done
echo "================================================================"
