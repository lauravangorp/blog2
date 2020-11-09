---
title: ''
layout: 'layouts/home.html'
pagination:
  data: collections.blog
  size: 1
permalink: '{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'See newer posts'
paginationNextText: 'See older posts'
custom_css:
---
