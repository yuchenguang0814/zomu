<template>
  <div>
    <el-page-header content="添加案例" icon="" title="案例管理">
    </el-page-header>
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
        <el-input v-model="newForm.author"></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="content">
        <Editor />
      </el-form-item>
      <el-form-item label="封面图片" prop="imgUrl">
        <Upload :logo="newForm.imgUrl" @kerwinchange = "handleChange" />
      </el-form-item>
      <el-form-item label="案例关键词" prop="pageKey">
        <el-input v-model="newForm.pageKey"></el-input>
      </el-form-item>
      <el-form-item label="关键词描述" prop="pageDescription">
        <el-input v-model="newForm.pageKey"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
import {ref, reactive} from 'vue'
import upload from '../../../util/upload'
import Upload from '../../components/upload/Upload'
import Editor from '../../components/editor/Editor'
const newFormRef = ref()
const newForm = reactive({
  title: '',
  pageKey: '',
  pageDescription: '',
  author: '',
  content: '',
  imgUrl: '',
  isPublish:0,
  file:null  
})
const newFormRules = reactive({
  title:[{required:true,message:'请输入案例标题',trigger:'blur'}],
  author:[{required:true,message:'请输入作者',trigger:'blur'}],
  imgUrl:[{required:true,message:'请上传图片',trigger:'blur'}],
  content:[{required:true,message:'请输入案例内容',trigger:'blur'}]
})
const handleChange = (file) => {
  newForm.imgUrl = URL.createObjectURL(file)
  newForm.file = file
}
</script>
