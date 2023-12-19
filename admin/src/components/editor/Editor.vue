<template>
  <div style="border: 1px solid #ccc">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
    />
    <Editor
      style="height: 500px; overflow-y: hidden;"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      @onCreated="handleCreated"
    />
  </div>
</template>
<script setup> 
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { onBeforeUnmount, ref, shallowRef, onMounted,defineEmits,defineProps, watchEffect,wacth} from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
const emit = defineEmits(['event'])
const props = defineProps({
  content:String
})
    // 编辑器实例，必须用 shallowRef
    const editorRef = shallowRef()

    // 内容 HTML
    const valueHtml = ref()
    watchEffect(() => {
      valueHtml.value =  props.content
    })
    wacth(valueHtml, (editor)=>{
      emit('event',editor)
    })
    // 模拟 ajax 异步获取内容
    onMounted(() => {
      props.content && valueHtml(props.content)
     
    })
    const toolbarConfig = {}
    const editorConfig = { placeholder: '请输入内容...' }
  
   
    // 组件销毁时，也及时销毁编辑器
    onBeforeUnmount(() => {
        const editor = editorRef.value
        if (editor == null) return
        editor.destroy()
    })

    const handleCreated = (editor) => {
      editorRef.value = editor // 记录 editor 实例，重要！
      
    }
</script>  