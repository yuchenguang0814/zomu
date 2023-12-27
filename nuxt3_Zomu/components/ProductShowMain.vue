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
        <div v-html="vHtml" style="width: 14rem;"></div>
      </div>
    </main>
</template>

<script setup>
import CategorySlide from './slidemenu/categorySlide.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const publicPath = 'http://localhost:3000'

const { data } = await useFetch( publicPath + `/web/pro/getPro/${route.params.id}`, {method: 'get'})
const vidHtml =  data.value.data.data[0].vidurl? ` <div
              id="view"
              class="step"
              data-x="-300"
              data-y="600"
              data-scale="0.2"
              data-rotate="270"
			  data-thumbnail="/images/thumbnails/3.jpg"

            >
            
              ${data.value.data.data[0].vidurl}
            </div>`: ''

const tabHtml = data.value.data.data[0].content?`<div
              id="table"
              class="step"
              data-x="800"
              data-y="2400"
              data-scale="1.8"
              data-rotate="360"
			  data-thumbnail="/images/thumbnails/4.jpg"
            >
            ${data.value.data.data[0].content}
            </div>`: ''

 const abvHtml = data.value.data.data[0].advantage?`<div
              id="capture"
              class="step"
              data-x="1100"
              data-y="1200"
              data-scale="1.8"
              data-rotate="180"
			  data-thumbnail="/images/thumbnails/2.jpg"
            >
            <div class="pro-adv">${data.value.data.data[0].advantage}</div>
            </div>`: ''
const vHtml = `
<div class="pages o-pro">
          <div id="ipresenter">
            <div id="intro" class="step" data-x="0" data-y="0" data-thumbnail="/images/thumbnails/1.jpg">
              <div class="pro-img-box"><img src="http://localhost:3000/${data.value.data.data[0].image}" class="pro-img" /></div>
              
              <h2>${data.value.data.data[0].name}</h2>
              <p>
                ${data.value.data.data[0].overView}
              </p>
            </div>
            `+ abvHtml + vidHtml + tabHtml + `
          </div>
        </div>
`
</script>