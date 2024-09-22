---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
cover:
    image: "/talks/{{ .Name }}/images/cover.jpg"
    relative: false
---
