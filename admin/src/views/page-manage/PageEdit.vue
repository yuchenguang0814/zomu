<template>
  <div>
    <el-card><el-page-header content="修改页面" icon="" title="页面管理">
    </el-page-header></el-card>
   <el-form
      ref="pageFormRef"
      :model="pageForm"
      :rules="pageFormRules"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="页面名称" prop="pageName">
        <el-input v-model="pageForm.pageName"></el-input>
      </el-form-item>
      <el-form-item label="页面描述" prop="pageTitleImage">
        <el-input
          v-model="pageForm.pageTitleImage"
          :autosize="{ minRows: 4, maxRows: 6 }"
          type="textarea"
        />
      </el-form-item>
      <el-alert show-icon title="为了更好的优化，请填写下面这些信息" type="warning" :closable="false" class="key_alert"></el-alert>
      <el-form-item label="关键词" prop="pageKey">
        <el-input v-model="pageForm.pageKey"></el-input>
      </el-form-item>
      <el-form-item label="关键词描述" prop="pageDescription">
        <el-input v-model="pageForm.pageDescription" type="textarea" style="min-height: 80px;"></el-input>
      </el-form-item>
      <el-button type="primary" @click="addpage()" style="margin: 0 auto;display: block;">更新页面</el-button>
    </el-form>
    
    
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import {ref, reactive,onMounted} from 'vue'
// import upload from '../../../util/upload'
// import Upload from '../../components/upload/Upload'
import Editor from '../../components/editor/Editor'
import { ElMessage } from 'element-plus'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios';
const router = useRouter()
const route = useRoute()
const pageFormRef = ref()
const store = useStore();
const pageForm = reactive({
  pageName: '',
  pageKey: '',
  pageTitleImage:'',
  pageDescription: ''
})
const pageFormRules = reactive({
  pageName:[{required:true,message:'请输入页面名称',trigger:'blur'}],
  pageTitleImage:[{required:true,message:'请输入页面描述',trigger:'blur'}],
})
// const handleChange = (file) => {
//   pageForm.pageImage = URL.createObjectURL(file)
//   pageForm.file = file
// }
const addpage =() => {
  pageFormRef.value.validate(async (valid) => {
    if(valid) {
    const res = await axios.post(`/admin/page/editPage`,pageForm)
    const result = res.data.data
    if (result.code !== 200) return ElMessage.error(result.message)
    ElMessage.success(result.message)
    router.back()
    }
  })
}
onMounted(async () => {
  const result = await axios.get(`/admin/page/getPage/${route.params.id}`)
  Object.assign(pageForm,result.data.data.data[0])
  console.log(pageForm)
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