<template>
  <div>
    <Header :content="1" />
    <ProductShowMain v-if="!isPhone" />
    <ProductsPhoneShow else />
    <!-- <div class="sharethis-inline-share-buttons"></div> -->
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
const isPhone = ref(false)
onMounted(() => {
  isPhone.value = isMobile()
})
const isMobile = () => {
  const userAgent = navigator.userAgent;
  const mobileKeywords = /Mobile|Android|iPhone|iPad|iPod|Windows Phone/i;
  return mobileKeywords.test(userAgent)
}
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