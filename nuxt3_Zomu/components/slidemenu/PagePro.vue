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
<MainPage
      :total= data.data.count[0]?data.data.count[0]:1
      :pageSize = 4
			:id="`${props.content}`"
      :pageNum = pageNum
      @pageChange="pageChange"
      :class="className"
      />
</template>
<script setup>
import { defineProps,nextTick} from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const className = 'page'
const props = defineProps({
  content:String
})
const pageNum = ref();
const pageChange =  (value) => {
  pageNum.value = value.index
}
const isHover = false;
const toggleHover = (value) => {
	isHover = value
}
const publicPath = 'http://localhost:3800'
const query = {
    id: route.params.id,
    page: route.params.page
  }
  const { data } = await useFetch( publicPath + `/web/pro/getProByCid/${JSON.stringify(query)}`, {method: 'get'})




</script>