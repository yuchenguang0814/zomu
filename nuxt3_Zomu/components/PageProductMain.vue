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
          <div class='pages'>
              <h2 class="poster__title"> {{ data.data.data[0].pageName }}</h2>
              <p class="poster__deco">{{ data.data.data[0].pageTitleImage }}</p>
              <PagePro :content="route.params.id "></PagePro>
          </div>
        </div>
    </main>
  </template>
  
  <script setup>
  import CategorySlide from './slidemenu/categorySlide.vue'
  import PagePro from './slidemenu/PagePro.vue'
  import { useRoute } from 'vue-router'
  const route = useRoute()
  const publicPath = 'http://47.99.161.248:3800'
  const { data } = await useFetch( publicPath + `/web/pro/getCateByCid/${route.params.id}`, {method: 'get'})

  </script>