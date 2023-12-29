<template>
  <main class="view">
		<div class="v-content ">
			<img src="/images/img1.jpg" alt="{{ props.content.pageName }}" class="o-view-img">
      <ContSlide :content="2" />
      <div class='pages product' style="box-shadow: none;">
            <h2 class="poster__title"> {{ props.content.pageName }}</h2>
						<p class="poster__deco">{{ props.content.pageTitleImage }}</p>
						<Send />
			</div>
		</div>
	</main>
</template>
<script setup>
import ContSlide from './slidemenu/contactSlide.vue'
import Send from './send/Send.vue'
import { defineProps } from 'vue'
const props = defineProps({
  content:String
})
</script>
<style>
/* .pages.product input {
	display: block;
	width:60%;
	margin-left:20%;
}
.pages.product .form__input.form_text {
	margin-left:20%;
	width: 60%;
}
.pages.product .button {
	margin: 20px auto;
} */
</style>
