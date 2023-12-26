<template>
  <main class="view o-v-pro">
      <div class="v-content">
        <img src="/images/img1.jpg" alt="" class="o-view-img" />
        <CategorySlide></CategorySlide>
        <div class="pages o-pro">
          <div>
            <div id="ipresenter">
            <div id="intro" class="step" data-x="0" data-y="0" data-thumbnail="/images/thumbnails/1.jpg">
              <img src="/images/pro1.png" />
              <h2>111</h2>
              {{proData.name}}
              <p>
                333
              </p>
            </div>

            <div
              id="capture"
              class="step"
              data-x="1100"
              data-y="1200"
              data-scale="1.8"
              data-rotate="180"
			  data-thumbnail="/images/thumbnails/2.jpg"
            >
              <img src="/images/pro2.jpg" />
              <h2>Application</h2>
              <p>
                <strong>Meat and poultry: </strong>Beef, pork, chicken, ham,
                sausages, etc.<strong>Seafood: </strong>Fish, shrimp, crab,
                shellfish, etc.<strong>Vegetables: </strong>Carrots, beans,
                cauliflower, peas, corn, etc.
                <strong>Nuts and dried fruits: </strong>Peanuts, almonds,
                walnuts, raisins, cranberries, etc.<strong
                  >Convenience foods: </strong
                >Vacuum-packed ready-to-eat rice, instant noodles, canned foods,
                etc. <strong>Dairy products: </strong>Cheese, butter, yogurt,
                etc.<strong>Seasonings and spices: </strong>Salt, sugar, pepper,
                dried herbs, etc.
              </p>
            </div>

            <div
              id="view"
              class="step"
              data-x="-300"
              data-y="600"
              data-scale="0.2"
              data-rotate="270"
			  data-thumbnail="/images/thumbnails/3.jpg"
            >
              <img src="/images/pro3.jpg" />
              <h2>Bag Style:</h2>
            </div>
            <div
              id="table"
              class="step"
              data-x="800"
              data-y="2400"
              data-scale="1.8"
              data-rotate="360"
			  data-thumbnail="/images/thumbnails/4.jpg"
            >
			<table style="width: 100%">
				<tbody>
				  <tr class="firstRow">
					<td ><p>ZP Series</p></td>
					<td ><p>ZP8-200</p></td>
					<td><p>ZP8-260</p></td>
					<td><p>ZP8-300</p></td>
					<td><p>ZP8-400</p></td>
					<td><p>ZP10-200</p></td>
				  </tr>
				  <tr>
					<td ><p>Bag Width</p></td>
					<td ><p>80-200mm</p></td>
					<td><p>130-260mm</p></td>
					<td><p>190-300mm</p></td>
					<td><p>300-420mm</p></td>
					<td><p>100-200mm</p></td>
				  </tr>
				  <tr>
					<td ><p>Bag Length</p></td>
					<td ><p>100-400mm</p></td>
					<td><p>100-400mm</p></td>
					<td><p>100-400mm</p></td>
					<td><p>100-450mm</p></td>
					<td><p>100-400mm</p></td>
				  </tr>
				  <tr>
					<td ><p>Capacity</p></td>
					<td ><p>10-60bags/min</p></td>
					<td><p>10-50bags/min</p></td>
					<td><p>10-40bags/min</p></td>
					<td><p>10-25bags/min</p></td>
					<td><p>10-80bags/min</p></td>
				  </tr>
				  <tr>
					<td ><p>Filling Range</p></td>
					<td ><p>10-1000g</p></td>
					<td><p>10-1500g</p></td>
					<td><p>10-2000g</p></td>
					<td><p>50-3000g</p></td>
					<td><p>10-1000g</p></td>
				  </tr>
				  <tr>
					<td ><p>Power</p></td>
					<td ><p>3.3Kw</p></td>
					<td><p>3.3Kw</p></td>
					<td><p>3.8Kw</p></td>
					<td><p>3.8Kw</p></td>
					<td><p>3.6Kw</p></td>
				  </tr>
				  <tr>
					<td><p>Compress Air Requirement</p></td>
					<td colspan="5" >
					  <p>0.6-0.8 m³/min (supply by user)</p>
					</td>
				  </tr>
				</tbody>
			  </table>
            </div>
          </div>
          </div>
        </div>
      </div>
    </main>
</template>

<script setup>
import CategorySlide from './slidemenu/categorySlide.vue'
import { useRoute } from 'vue-router'
import {ref} from 'vue'
const route = useRoute()
const proData = ref({})
const publicPath = 'http://localhost:3000'
const { data } = await useFetch(`http://localhost:3000/web/pro/getPro/${route.params.id}`, {method: 'get'})
proData.value = data.value.data.data[0]
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
    href: '/css/component.css'
  },
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