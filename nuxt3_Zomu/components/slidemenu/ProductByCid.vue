<template>
  <div class="poster__box">
							<ul class="in-pro-list">
								<li :class="isHover? 'pro-hover': ''" @mouseenter="toggleHover(true)" @mouseleave="toggleHover(false)" 
								v-for="item in indexList.pageNum"
								:key="item"
								>
								{{ item.index }}
									<!-- <a :href="`/product_show/${data.data.data[index-1].id}`">
										<img :src="`${publicPath }` + data.data.data[index-1].image" :alt= data.data.data[index-1].name>
                    <span>{{data.data.data[index-1].name}}</span>
									</a> -->
								</li>
							</ul>
</div>
<MainPage
      :total= data.data.count[0]?data.data.count[0]:1
      :pageNum = pageNum
      @pageChange="pageChange"
      />
</template>
<script setup>
import { defineProps,nextTick,watch} from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const indexList = [
	{
		'index1': [
			{'index':1},
			{'index':2},
			{'index':3},
			{'index':4}
		]
	}
]

const props = defineProps({
  content:String,
	count:Number
})
const pageNum = ref(0);
const PageData = ref()
const pageChange =  (value) => {
  pageNum.value = value
	console.log(typeof(pageNum.value))
}
console.log(indexList[pageNum])
// console.log(parseInt(pageNum.value))
// console.log(typeof())

// console.log(indexList[])
// console.log(indexList[])
const isHover = false;
const toggleHover = (value) => {
	isHover = value
}
const publicPath = 'http://localhost:3000'
const { data } =  await useFetch( publicPath + `/web/pro/getProByCid/${props.content}`, {method: 'get'})
const getDate = async() => {
	return
}
if(!route.params.page) {
	const { data } = await useFetch( publicPath + `/web/pro/getProByCid/${props.content}`, {method: 'get'})
// 	const query = {
//   id: props.content,
//   page: route.params.page
// }
// const { data } = await useFetch( publicPath + `/web/pro/getProByCid/${JSON.stringify(query)}`, {method: 'get'})
}


</script>