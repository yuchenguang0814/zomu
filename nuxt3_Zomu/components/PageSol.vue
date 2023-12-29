<template>
  <main class="view">
		<div class="v-content">
			<img src="/images/img1.jpg" alt="" class="o-view-img">
      <AboutSlide :content="2" />
			<div class='pages news'>
				<ul class="new-list">
					<li v-for="item in data.data.data"
					:key="item.id"
					:class="nowIndex === item.id?'hover':''"
					@mouseenter="toggleHover(item.id)" @mouseleave="toggleHover(0)">
						<a :href="`/solution_show/${item.id}`">
							<img :src="`${publicPath }` + item.imgurl" alt="">
							<div class="new-list-text">
								<h2>{{ item.title }}</h2>
								<p>{{ item.pageDescription }}</p>
							</div>
						</a>
					</li>
				</ul>
			
			</div>
			<MainPage
	:total= data.data.count[0]?data.data.count[0]:1
	:class= className
	 />
		</div>
		
	</main>

</template>
<script setup>
import AboutSlide from './slidemenu/aboutSlide'
import { useRoute } from 'vue-router'
const route = useRoute()
const publicPath = 'http://localhost:3000'
const { data } = await useFetch( publicPath + `/web/new/getPageNew/${route.params.page}`, {method: 'get'})
const className = 'sol'
// const isHover = ref(false);
const nowIndex = ref()
const toggleHover = (index) => {
	nowIndex.value = index
}
</script>
<style scoped>
:deep() .main_pages .pagination {
	bottom: 10% !important;
}
</style>