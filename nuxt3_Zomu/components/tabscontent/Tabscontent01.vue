<template>
  <div class="tabscontent__item tab_item_01">
				<figure class="poster">
					<img class="poster__img" src="/images/img1.jpg" alt="Poster 1" />
					<figcaption class="poster__caption">
						<h2 class="poster__title">Product</h2>
						<p class="poster__deco">Zomukikai is a leading manufacturer of specialized packaging solutions for the food, beauty, 
							and pharmaceutical industries.</p>
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
						<!-- <span class="poster__number">02</span> -->
					</figcaption>
				</figure>
			</div>
</template>


<script setup>
const isHover = false;
const toggleHover = (value) => {
	isHover = value
}
const publicPath = 'http://47.99.161.248:3800'
const { data } = await useFetch(publicPath + '/web/pro/getProsByIshome', {method: 'get'})
</script>
<style>
</style>