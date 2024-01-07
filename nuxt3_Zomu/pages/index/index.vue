<template>
<Head>
    <Title> {{ data.data.data[0].pageName }}</Title>
    <Meta name="key" :content="data.data.data[0].pageKey" />
    <Meta name="description" :content="data.data.data[0].pageDescription" />
</Head>
    <div>
      <Header :content="data.data.data[0].id"/>
      <Main />
    </div>
  </template>

<script setup>
const publicPath = 'http://47.99.161.248:3800'
const { data } = await useFetch( publicPath + `/web/Page/getPage/4`, {method: 'get'})
useHead({
  script:[
  {
    src:"/js/jquery-1.7.2.min.js",
    body:true
  },
  {
    src:"/js/adaptive.js",
    body:true
  },
  {
    src:"/js/anime.min.js",
    body:true
  },
	{src: 'js/enquire.min.js',
	body:true
	},
	,
	{src: 'js/tabsnav.js',
	body:true
	},
	{
    src:"/js/common.js",
    body:true
  },
	{
    src:"/js/index.js",
    body:true
  }
  ]
})

</script>