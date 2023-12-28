<template>
<div class="nav_send_form">
    <form onkeypress="return event.keyCode != 13;" class="form">
      <input class="form__input" type="text" placeholder="Name" v-model="form.name">
      <input class="form__input" type="text" placeholder="Email" v-model="form.eamil">
      <textarea class="form__input form_text" placeholder="Content" v-model="form.content"></textarea>
      <button class="form__button button submit" @click="send()" type="button">SEND</button>
    </form>
  </div>
  
</template>

<script setup>
import {reactive} from 'vue'
import axios from 'axios'
const form = reactive({
  name:'',
  eamil:'',
  content:''
})
// const Date = JSON.stringify(form)
const publicPath = 'http://localhost:3000'
  
const send = async () => {
  const { data } = await useFetch( publicPath + `/email`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: form
})
}
</script>