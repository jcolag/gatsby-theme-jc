#!/bin/sh
date=$(faketime "${3}" /bin/date +%Y-%m-%dT%TZ)
dir="src/pages/${1}"
file="${dir}/index.md"
mkdir -p "${dir}"

cat > "${file}" <<EOF
---
path: '/${1}/'
category: 'category'
tags: ['tag']
title: '${2}'
date: '${date}'
summary: 'Summary'
images: [
  'images/kelly-sikkema-391341-unsplash.jpg',
]
---

## Header

* * *

**Credits**:  The header image is [Blank Page](https://unsplash.com/photos/-o050Ap2PX0) by [Kelly Sikkema](https://unsplash.com/@kellysikkema), under the not-quite-free-but-close-enough-but-really-shouldn't-be-used [Unsplash License](https://unsplash.com/license).
EOF

