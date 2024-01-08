<template>
  <Head>
      <Title> {{ data.data.data[0].title }}</Title>
      <Meta name="key" :content="data.data.data[0].pageKey" />
      <Meta name="description" :content="data.data.data[0].pageDescription" />
  </Head>
  <div class="card__container">
    <img :src="`${publicPath }` + data.data.data[0].imgurl" :alt="data.data.data[0].title">
    <div class="card__content">
      <a href="/about/solutions"><i class="card__btn-close fa fa-times"></i></a>
      <div class="card__caption">
        <h2 class="card__title">{{data.data.data[0].title}}</h2>
        <p class="card__subtitle">{{data.data.data[0].pageDescription}}</p>
      </div>
      <div class="card__copy">
        <div class="meta">
          <img class="meta__avatar" src="/images/authors.png" :alt="data.data.data[0].author" />
          <span class="meta__author">{{data.data.data[0].author}}</span>
          <span class="meta__date">{{time}}</span>
        </div>
        <div class="card_text" v-html="data.data.data[0].content"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const publicPath = 'http://localhost:3800'
const { data } = await useFetch( publicPath + `/web/new/getNew/${route.params.id}`, {method: 'get'})
const time = data.value.data.data[0].createtime.split('T')[0]
</script>
