<template>
  <div id="myeditor"></div>
</template>
<script setup>
import { onMounted } from 'vue';
import E from 'wangeditor'
onMounted(()=>{

  const editor = new E('#myeditor')
  editor.create()
})

</script>