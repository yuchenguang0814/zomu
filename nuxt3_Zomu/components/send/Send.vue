<template>
<div class="nav_send_form">
    <form onkeypress="return event.keyCode != 13;" class="form">
      <input class="form__input" type="text" placeholder="Name" v-model="form.name">
      <input class="form__input" type="text" placeholder="Email" v-model="form.email">
      <textarea class="form__input form_text" placeholder="Content" v-model="form.content"></textarea>
      <button class="form__button button submit" @click="send()" type="button">SEND</button>
      <Email 
      :isSend="isSend"
      :name = "form.name"
      :email = "form.email"
      :content = "form.content"
       />
    </form>
  </div>
  
</template>

<script setup>
import {reactive} from 'vue'
import  Email  from './Email.vue';
// import axios from 'axios'
const form = reactive({
  name:'',
  email:'',
  content:''
})
// const Date = JSON.stringify(form)
const publicPath = 'http://47.99.161.248:3800'
const isSend = ref(false)
const send = async () => {
  if(form.name == '' || form.email == ''){
    alert('Please enter your name or email')
  } else {
    isSend.value = true
    setTimeout(
      await $fetch( publicPath + `/email`, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: 'POST',
    body: {
    'name': form.name,
    'email': form.email,
    'content': form.content
    }
  }), 500 )
   
  }
  
  form.name = ''
  form.email = ''
  form.content =''
}


</script>