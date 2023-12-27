<template>
  <div class="poster__box">
							<ul class="in-pro-list">
								<li :class="isHover? 'pro-hover': ''" @mouseenter="toggleHover(true)" @mouseleave="toggleHover(false)" 
								v-for="item in data.data.data"
								:key="item.id"
								>
									<a :href="`/product_show/${item.id}`">
										<img :src="`${publicPath }` + item.image" :alt= item.name>
                    <span>{{item.name}}</span>
									</a>
								</li>
							</ul>
						</div>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  content:String
})
const isHover = false;
const toggleHover = (value) => {
	isHover = value
}
const publicPath = 'http://localhost:3000'
const { data } = await useFetch( publicPath + `/web/pro/getProByname/${props.content}`, {method: 'post'})
</script>