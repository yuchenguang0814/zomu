<template>
  <div id="myeditor"></div>
</template>
<script setup>
import { onMounted,defineEmits } from 'vue';
import E from 'wangeditor'
const emit = defineEmits(['event'])
onMounted(()=>{

  const editor = new E('#myeditor')
  editor.create()
  editor.config.onchange = function(newHtml) {
    emit('event',newHtml)
  }
})

</script>