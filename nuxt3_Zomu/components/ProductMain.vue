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
              <PorductByCid :content="route.params.id "></PorductByCid>
			  </div>
      </div>
  </main>
 
</template>

<script setup>
import CategorySlide from './slidemenu/categorySlide.vue'
import PorductByCid from './slidemenu/ProductByCid.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const publicPath = 'http://localhost:3000'
const { data } = await useFetch( publicPath + `/web/pro/getCateByCid/${route.params.id}`, {method: 'get'})
// if(route.params.page) {
//   const query = {
//   id: route.params.id,
//   page: route.params.page
// }
// const { data } = await useFetch( publicPath + `/web/pro/getProByCid/${JSON.stringify(query)}`, {method: 'get'})
// } else {
//   const { data } = await useFetch( publicPath + `/web/pro/getCateByCid/${route.params.id}`, {method: 'get'})
// }

</script>