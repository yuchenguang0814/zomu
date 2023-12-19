<template>
  <div>
    <el-card><el-page-header content="修改案例" @back="handleBack()" title="案例管理"></el-page-header>
    
    </el-card>
   <el-form
      ref="newFormRef"
      :model="newForm"
      :rules="newFormRules"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="案例标题" prop="title">
        <el-input v-model="newForm.title"></el-input>
      </el-form-item>
      <el-form-item label="作者" prop="author">
        <el-input v-model="newForm.author" disabled ></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="content">
        <Editor @event="editorHandleChange" :content="newForm.content" v-if="newForm.content"/>
      </el-form-item>
      <el-form-item label="封面图片" prop="imgurl">
        <Upload :logo="newForm.imgurl" @kerwinchange = "handleChange" />
      </el-form-item>
      <el-form-item label="案例关键词" prop="pageKey">
        <el-input v-model="newForm.pageKey"></el-input>
      </el-form-item>
      <el-form-item label="关键词描述" prop="pageDescription">
        <el-input v-model="newForm.pageDescription" type="textarea" style="min-height: 80px;"></el-input>
      </el-form-item>
      <el-button type="primary" @click="addNews()">更新案例</el-button>
    </el-form>
    
    
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import {ref, reactive,onMounted,computed} from 'vue'
import upload from '../../../util/upload'
import Upload from '../../components/upload/Upload'
import Editor from '../../components/editor/Editor'
import { ElMessage } from 'element-plus'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios';
const router = useRouter()
const route = useRoute()
const newFormRef = ref()
const store = useStore();
const {companyName} = store.state.userInfo
const newForm = reactive({
  title: '',
  pageKey: '',
  pageDescription: '',
  author: companyName,
  content: '',
  imgurl: '',
  isPublish:0,
  file:null  
})

const newFormRules = reactive({
  title:[{required:true,message:'请输入案例标题',trigger:'blur'}],
  author:[{required:true,message:'请输入作者',trigger:'blur'}],
  imgurl:[{required:true,message:'请上传图片',trigger:'blur'}],
  content:[{required:true,message:'请输入案例内容',trigger:'blur'}]
})
const handleChange = (file) => {
  newForm.imgurl = URL.createObjectURL(file)
  newForm.file = file
}
const editorHandleChange = (data) => {
  newForm.content = data
}
const addNews =() => {
  newFormRef.value.validate(async (valid) => {
    if(valid) {
      const res = await upload('/admin/new/getNews',newForm)
      const result = res.data.data
      if (result.code !== 200) return ElMessage.error(result.message)
      ElMessage.success(result.message)
      router.back()
    }
  })
}
const handleBack =()=> {
  router.back()
}
onMounted(async () => {
  const result = await axios.get(`/admin/new/getNews/${route.params.id}`)
  Object.assign(newForm,result.data.data.data[0])
  newForm.author = companyName
})
</script>
<style scoped>
.el-form {
  margin-top: 50px;
  max-width: 880px;
}
.el-form-item__label {
  justify-content: flex-start;
}
</style>