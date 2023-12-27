<template>
  <div>
    <Header />
    <ProductShowMain />
  </div>
</template>
<script setup>
  useHead({
  link:[
  {
    rel: 'stylesheet',
    href: '/css/pages.css'
  },
  {
    rel: 'stylesheet',
    type: 'text/css',
    href: '/css/other.css'
  }
  ],
  script:[
  {
    src:"/js/jquery-1.7.2.min.js",
    body:true
  },
  {
    src:"/js/adaptive.js",
    body:true
  },
  {
    src:"/js/anime.min.js",
    body:true
  },
  {
    src:"/js/common.js",
    body:true
  },
  {
    src:"/js/ipresenter.packed.js",
    body:true
  },
  {
    src:"/js/ipresenter.js",
    body:true
  }
  ]
})
</script>
