<template>
  <NuxtPage :keepalive="{max: 10}"></NuxtPage>
  <Footer></Footer>
</template>
<script setup>
import Footer from './components/Footer.vue'
</script>