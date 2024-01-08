<template>
  <span class="send_span" v-if="props.isSend">Send Success</span>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  isSend:Boolean,
  name:String,
  email:String,
  content:String
})
console.log(props.isSend)
const publicPath = 'http://localhost:3800'
watch(props.isSend,async()=> {
  const { data } = await $fetch( publicPath + `/email/add`, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: 'POST',
    body: {
    'name': props.name,
    'email': props.email,
    'content': props.content
    }
  })
  console.log(data)
})

</script>
