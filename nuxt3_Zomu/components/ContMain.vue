<template>
  <main class="view">
		<div class="v-content">
			<img src="/images/img1.jpg" alt="" class="o-view-img">
      <ContSlide :content="1" />
			<div class='pages product' style="box-shadow: none;">
        <h2 class="poster__title"> {{ props.content.pageName }}</h2>
				<p class="poster__deco">{{ props.content.pageTitleImage }}</p>
				<figure class="poster">
					<figcaption class="poster__caption">
						<TabsMain :content="true"/>
					</figcaption>
				</figure>
			</div>
		</div>
	</main>
</template>
<script setup>
import ContSlide from './slidemenu/contactSlide.vue'
import TabsMain from './tabscontent/TabsMain.vue'
import { defineProps } from 'vue'
const props = defineProps({
  content:String
})
useHead({
	script:[
		{src: 'js/enquire.min.js',
	body:true
	},
	,
	{src: 'js/tabsnav.js',
	body:true
	},
	{
    src:"/js/common.js",
    body:true
  },
	{
    src:"/js/index.js",
    body:true
  }
	]
})
</script>
<style>
.product #gallery figure:first-child {
	margin-left: 2rem;
}
</style>