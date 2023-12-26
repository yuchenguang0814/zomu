<template>
  <div>
    <el-card><el-page-header content="添加案例" icon="" title="案例管理">
    </el-page-header></el-card>
   <el-form
      ref="cateFormRef"
      :model="cateForm"
      :rules="cateFormRules"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="产品名称" prop="pageName">
        <el-input v-model="cateForm.pageName"></el-input>
      </el-form-item>
      <el-form-item label="产品序号" prop="pagePath">
          <el-input-number v-model="cateForm.pagePath" :min="1"  controls-position="right" size="small"/>
      </el-form-item>
      <el-form-item label="产品图片" prop="pageImage">
        <Upload :logo="cateForm.pageImage" @kerwinchange = "handleChange" />
      </el-form-item>
      <el-alert show-icon title="为了更好的优化，请填写下面这些信息" type="warning" :closable="false" class="key_alert"></el-alert>
      <el-form-item label="关键词" prop="pageKey">
        <el-input v-model="cateForm.pageKey"></el-input>
      </el-form-item>
      <el-form-item label="关键词描述" prop="pageDescription">
        <el-input v-model="cateForm.pageDescription" type="textarea" style="min-height: 80px;"></el-input>
      </el-form-item>
      <el-button type="primary" @click="addcate()" style="margin: 0 auto;display: block;">更新分类</el-button>
    </el-form>
    
    
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import {ref, reactive,onMounted} from 'vue'
import upload from '../../../util/upload'
import Upload from '../../components/upload/Upload'
import Editor from '../../components/editor/Editor'
import { ElMessage } from 'element-plus'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios';
const router = useRouter()
const route = useRoute()
const cateFormRef = ref()
const store = useStore();
const cateForm = reactive({
  pageName: '',
  pathPath: '',
  pageKey: '',
  pageImage:'',
  pageDescription: '',
  file:null  
})
const cateFormRules = reactive({
  pageName:[{required:true,message:'请输入产品名称',trigger:'blur'}],
  pathPath:[{required:true,message:'请输入序号',trigger:'blur'}],
  pageImage:[{required:true,message:'请上传图片',trigger:'blur'}],
})
const handleChange = (file) => {
  cateForm.pageImage = URL.createObjectURL(file)
  cateForm.file = file
}
const addcate =() => {
  cateFormRef.value.validate(async (valid) => {
    if(valid) {
    const res = await upload('/admin/cate/getcates',cateForm)
    const result = res.data.data
    if (result.code !== 200) return ElMessage.error(result.message)
    ElMessage.success(result.message)
    router.back()
    }
  })
}
onMounted(async () => {
  const result = await axios.get(`/admin/cate/getcates/${route.params.id}`)
  Object.assign(cateForm,result.data.data.data[0])
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