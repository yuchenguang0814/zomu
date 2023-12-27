<template>
  <main class="view">
		<div class="v-content">
			<img src="/images/img1.jpg" alt="" class="o-view-img">
      <AboutSlide :content="2" />
      SolutionsMain
		</div>
	</main>
</template>
<script setup>
import AboutSlide from './slidemenu/aboutSlide'
</script>
