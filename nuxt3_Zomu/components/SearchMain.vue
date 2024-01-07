<template>
  <Head>
    <Title> {{ data.data.data[0].pageName }}</Title>
    <Meta name="key" :content="data.data.data[0].pageKey" />
    <Meta name="description" :content="data.data.data[0].pageDescription" />
</Head>
    <main class="view product">
        <div class="v-content">
          <img src="/images/img1.jpg" alt="" class="o-view-img" />
          <CategorySlide :content="all"></CategorySlide>
          <div class='pages '>
              <h2 class="poster__title"> {{ data.data.data[0].pageName }}</h2>
              <p class="poster__deco">{{ data.data.data[0].pageTitleImage }}</p>
              <ProductByName :content="route.params.searchInfo "></ProductByName>
          </div>
        </div>
      </main>
  </template>
  
  <script setup>
  import CategorySlide from './slidemenu/categorySlide.vue'
  import ProductByName from './slidemenu/ProductByName.vue'
  import { useRoute } from 'vue-router'
  const route = useRoute()
  const publicPath = 'http://47.99.161.248:3800'
  const { data } = await useFetch( publicPath + `/web/pro/getCateByCid/all`, {method: 'get'})
  </script>