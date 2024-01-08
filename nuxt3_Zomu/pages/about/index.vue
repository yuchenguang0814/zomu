<template>
  <Head>
      <Title> {{ data.data.data[0].pageName }}</Title>
      <Meta name="key" :content="data.data.data[0].pageKey" />
      <Meta name="description" :content="data.data.data[0].pageDescription" />
  </Head>
      <div>
        <Header :content="data.data.data[0].id"/>
        <Triangle />
        <AboutMain />
      </div>
    </template>
<script setup>
const publicPath = 'http://localhost:3800'
const { data } = await useFetch( publicPath + `/web/Page/getPage/5`, {method: 'get'})
  useHead({
    link:[
  {
    rel: 'stylesheet',
    href: '/css/pages.css'
  },
  {
    rel: 'stylesheet',
    type: 'text/css',
    href: '/css/other.css'
  }
  ],
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
    {
      src:"/js/common.js",
      body:true
    }
    ]
  })

  </script>