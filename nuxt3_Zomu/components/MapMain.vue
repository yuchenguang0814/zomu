<template>
  <main class="view">
		<div class="v-content ">
			<img src="/images/img1.jpg" alt="" class="o-view-img">
      <ContSlide :content="3" />
      <div class='pages product' style="box-shadow: none;">
            <h2 class="poster__title"> {{ props.content.pageName }}</h2>
						<p class="poster__deco">{{ props.content.pageTitleImage }}</p>
			</div>
		</div>
	</main>
</template>
<script setup>
import ContSlide from './slidemenu/contactSlide.vue'
import { defineProps } from 'vue'
const props = defineProps({
  content:String
})
</script>
