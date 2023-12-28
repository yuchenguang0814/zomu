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
		</div>
	</main>
</template>
<script setup>
import AboutSlide from './slidemenu/aboutSlide'
const publicPath = 'http://localhost:3000'
const { data } = await useFetch( publicPath + `/web/new/getNew`, {method: 'get'})
// const isHover = ref(false);
const nowIndex = ref()
const toggleHover = (index) => {
	nowIndex.value = index
}
</script>
