<template>
<Head>
    <Title> {{ data.data.data[0].pageName }}</Title>
    <Meta name="key" :content="data.data.data[0].pageKey" />
    <Meta name="description" :content="data.data.data[0].pageDescription" />
    
  </Head>
  <main class="view product">
      <div class="v-content">
        <img src="/images/img1.jpg" alt="" class="o-view-img" />
        <CategorySlide :content="route.params.id"></CategorySlide>
        <div class='pages '>
                <h2 class="poster__title"> {{ data.data.data[0].pageName }}</h2>
						<p class="poster__deco">{{ data.data.data[0].pageDescription }}</p>
              <PorductByCid :content="route.params.id"></PorductByCid>
			  </div>
      </div>
    </main>
</template>

<script setup>
import CategorySlide from './slidemenu/categorySlide.vue'
import PorductByCid from './slidemenu/ProductByCid.vue'
import { useRoute } from 'vue-router'
import {ref} from 'vue'
const route = useRoute()
const publicPath = 'http://localhost:3000'
const { data } = await useFetch( publicPath + `/web/pro/getCateByCid/${route.params.id}`, {method: 'get'})
useHead({
  link:[
  {
    rel: 'stylesheet',
    type: 'text/css',
    href: '/css/style.css'
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
  }
  ]
})


</script>