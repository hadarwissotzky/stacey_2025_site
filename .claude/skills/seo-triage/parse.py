#!/usr/bin/env python3
# Reads an HTML page from stdin, prints the SEO facts a crawl report flags.
# Regex-based on purpose: this is triage, not a spec-compliant parser.
import sys, re
import html as htmllib

html = sys.stdin.read()

def find(pat):
    m = re.search(pat, html, re.I | re.S)
    # Decode HTML entities so length checks match what Google actually renders
    # (raw "&ndash;"/"&amp;" would otherwise inflate the char count → false "too long" flags).
    return htmllib.unescape(m.group(1).strip()) if m else None

def findall(pat):
    return re.findall(pat, html, re.I | re.S)

title = find(r'<title[^>]*>(.*?)</title>')
canon = find(r'<link[^>]+rel=["\']canonical["\'][^>]*href=["\']([^"\']+)')
robots= find(r'<meta[^>]+name=["\']robots["\'][^>]*content=["\']([^"\']+)')
ogt   = find(r'<meta[^>]+property=["\']og:title["\'][^>]*content=["\']([^"\']*)')
ogi   = find(r'<meta[^>]+property=["\']og:image["\'][^>]*content=["\']([^"\']*)')
ogu   = find(r'<meta[^>]+property=["\']og:url["\'][^>]*content=["\']([^"\']*)')
ld    = len(findall(r'<script[^>]+type=["\']application/ld\+json["\']'))
hl    = len(findall(r'hreflang=["\']'))

tlen = len(title) if title else 0
print(f"title ({tlen}) : {title}")
print(f"canonical    : {canon}")
print(f"meta robots  : {robots}")
print(f"og:title     : {ogt}")
print(f"og:image     : {ogi}")
print(f"og:url       : {ogu}")
print(f"json-ld      : {ld} block(s)")
print(f"hreflang     : {hl} tag(s)")

flags = []
if title is None:
    flags.append("no <title>")
elif tlen > 60:
    flags.append(f"title {tlen} chars (>60, likely truncated in SERP)")
if canon is None:
    flags.append("no canonical")
if ogi is None:
    flags.append("no og:image")
elif ogi.startswith("http://"):
    flags.append("og:image is insecure http://")
if robots and "noindex" in robots.lower():
    flags.append("meta robots noindex")
for f in flags:
    print(f">>FLAG: {f}")
