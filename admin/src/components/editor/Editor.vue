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
import { onBeforeUnmount, ref, shallowRef, onMounted,defineEmits,defineProps, watchEffect,watch,reactive,nextTick } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import axios from "axios";
import upload from '../../../util/upload'
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
    watch(valueHtml, (editor)=>{
      emit('event',editor)
    })
    nextTick(()=>{
      setTimeout(() => {
        valueHtml.value =  props.content
      }, 200);
    })
    const toolbarConfig = { 
      excludeKeys:["group-video","emotion"]
    }
    const editorConfig = { 
      placeholder: '请输入内容...',
      MENU_CONF: {
          uploadImage:{
            // form-data fieldName ，默认值 'wangeditor-uploaded-image'
            fieldName: 'your-custom-name',

            // 单个文件的最大体积限制，默认为 2M
            maxFileSize: 1 * 1024 * 1024, // 1M
            // 选择文件时的类型限制，默认为 ['image/*'] 。如不想限制，则设置为 []
            allowedFileTypes: ['image/*'],
            async customUpload(file, insertFn) {// JS 语法
            const imgForm = reactive({
              file: null
            })
            imgForm.file = file
            const res = await upload('/admin/editupload',imgForm)
            const result = res.data.data.data
            const url = `http://localhost:3000/` + result.url
            insertFn(url, result.alt,result.href)
    }
          }
      }
   }
  
   
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