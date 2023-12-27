<template>
  <div>
    <Header :content="1" />
    <ProductShowMain />
    <div class="sharethis-inline-share-buttons"></div>
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
    src:"https://platform-api.sharethis.com/js/sharethis.js#property=658bd06481064a00129d144e&product=inline-share-buttons&source=platform"
  },
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
<style>
.sharethis-inline-share-buttons {
  position: absolute;
  right: 8%;
  top: 12%;
}
</style>