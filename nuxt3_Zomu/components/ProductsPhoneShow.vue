<template>
  <Head>
    <Title> {{ data.data.data[0].name }}</Title>
    <Meta name="key" :content="data.data.data[0].pageKey" />
    <Meta name="description" :content="data.data.data[0].pageDescription" />
    
  </Head>
  <main class="view o-v-pro">
      <div class="v-content">
        <img src="/images/img1.jpg" alt="" class="o-view-img" />
        <CategorySlide :content="data.data.data[0].c_id"></CategorySlide>
        <div class="phone-pro">
          <img :src="`${publicPath }` + data.data.data[0].image" :alt="data.data.data[0].name">
          <h2>{{data.data.data[0].name}}</h2>
        <div class="phone-pro-cont">
          <div class="text-newm">
            <strong><span style="line-height:1.5;">Product OverView</span></strong>
          </div>
          <div class="table-responsive">
            {{data.data.data[0].overView}}
          </div>
          <div class="text-newm">
            <strong><span style="line-height:1.5;">Product Video</span></strong>
          </div>
          <div class="table-responsive" v-html="data.data.data[0].vidurl">
          </div>
          <div class="text-newm">
            <strong><span style="line-height:1.5;">Product Table</span></strong>
          </div>
          <div class="table-responsive" v-html="data.data.data[0].content">
          </div>
        </div>
        </div>
      </div>
    </main>
</template>

<script setup>
import CategorySlide from './slidemenu/categorySlide.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const publicPath = 'http://localhost:3000'

const { data } = await useFetch( publicPath + `/web/pro/getPro/${route.params.id}`, {method: 'get'})

</script>