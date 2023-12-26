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
								<li class="pro-hover" 
								v-for="item in data.data.data"
								:key="item.id"
								
								>
								<nuxt-link :to="`/product_show/${item.id}`">
										<img :src="`${publicPath }` + item.image" :alt= item.name>
										<span>{{item.name}}</span>
								</nuxt-link>
								</li>
							</ul>
						</div>
						<!-- <span class="poster__number">02</span> -->
					</figcaption>
				</figure>
			</div>
</template>


<script setup>
const publicPath = 'http://localhost:3000'
const { data } = await useFetch('http://localhost:3000/web/pro/getProsByIshome', {method: 'get'})
</script>
