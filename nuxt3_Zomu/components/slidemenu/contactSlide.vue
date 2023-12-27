<template>
  <div class="o-nav">
				<div :class="`p2 ${props.content == '1' ? 'active': ''} `"><a href="/contact" class="toc__item">Contact Us</a></div>
				<div :class="`p2 ${props.content == '2' ? 'active': ''} `"><a href="/contact/send" class="toc__item">Send Mail</a></div>
				<div :class="`p2 ${props.content == '3' ? 'active': ''} `"><a href="/contact/map" class="toc__item">Map</a></div>
	</div>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  content:String
})
</script>