<template>
  <div class="o-nav">
				<div :class="`p2 ${props.content == '1' ? 'active': ''} `"><a href="/about" class="toc__item">about us</a></div>
				<!-- <div :class="`p2 ${props.content == '2' ? 'active': ''} `"><a href="/about/solutions" class="toc__item">Solutions</a></div> -->
				<div :class="`p2 ${props.content == '3' ? 'active': ''} `"><a href="/about/service" class="toc__item">Service</a></div>
				<div :class="`p2 ${props.content == '4' ? 'active': ''} `"><a href="/about/privacy"  class="toc__item">Privacy Policy</a></div>
			</div>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  content:String
})
</script>