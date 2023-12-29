<template>
  <div class="online-list fixed" v-if="isPhone">
    <ul>
      <li>
        <i class="big-icon block-icon block-icondianhua"></i>
        <a href="tel:+86-13515776936">+86-13515776936</a>
      </li>
      <li>
        <i class="big-icon block-icon block-icontelephone"></i>
        <a href="tel:+86-13515776936">+86-13515776936
        </a>
      </li>
      <li>
        <i class="big-icon block-icon block-iconyouxiang"></i>
        <a href="mailto:sales@zomukikai.com">sales@zomukikai.com</a>
      </li>
      <li>
        <i class="big-icon block-icon block-iconwhatsapp"></i>
        <a href="https://api.whatsapp.com/send?phone=86-13515776936">+86-13515776936</a>
      </li>
      <li>
        <i class="big-icon block-icon block-iconqq"></i>
        <a href="https://wpa.qq.com/msgrd?v=3&amp;uin=546448821">546448821</a>
      </li>
      <li class="icon-top display_none">
        <i class="big-icon block-icon block-iconfanhuidingbu"></i>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
const isPhone = ref(false)
onMounted(() => {
  isPhone.value = isMobile()
})
const isMobile = () => {
  const userAgent = navigator.userAgent;
  const mobileKeywords = /Mobile|Android|iPhone|iPad|iPod|Windows Phone/i;
  return mobileKeywords.test(userAgent)
}
</script>