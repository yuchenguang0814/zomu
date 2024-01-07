<template>
    <div class="o-nav product">
				<div :class="`p2 ${item.cid == props.content ? 'active' : ''}`"
        v-for="item in data.data.data"
        :key="item.cid"
        ><a :href="`/product/${item.cid}`" class="toc__item"> {{ item.pageName  }} </a></div>
			</div>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  content:String
})
const publicPath = 'http://47.99.161.248:3800'
const { data } = await useFetch(publicPath + '/web/pro/getCategory', {method: 'get'})
</script>