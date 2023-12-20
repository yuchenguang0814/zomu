<template>
    <div>
      <el-card><el-page-header content="添加案例" icon="" title="案例管理">
      </el-page-header></el-card>
     <el-form
        ref="proFormRef"
        :model="proForm"
        :rules="proFormRules"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="产品名称" prop="goods_name">
          <el-input v-model="proForm.goods_name"></el-input>
        </el-form-item>
        <el-form-item label="产品分类" prop="goods_cat">
            <el-select v-model="proForm.goods_cat" placeholder="请选择商品类别">
                <el-option
                  v-for="item in cateList"
                  :key="item.cid"
                  :label="item.pageName"
                  :value="item.cid"
                  v-if="cateList"
                  >
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="产品序号" prop="goods_sort">
            <el-input-number v-model="proForm.goods_sort" :min="1"  controls-position="right" size="small"/>
        </el-form-item>
        <el-form-item label="产品图片" prop="imgUrl">
          <Upload :logo="proForm.imgUrl" @kerwinchange = "handleChange" />
        </el-form-item>
        <el-form-item label="视频地址" prop="vidurl">
          <el-input v-model="proForm.vidurl"></el-input>
        </el-form-item>
        <el-form-item label="产品概述" prop=" goods_overview">
          <el-input
            v-model="proForm.goods_overview"
            :autosize="{ minRows: 4, maxRows: 6 }"
            type="textarea"
            
          />
        </el-form-item>
        <el-alert show-icon title="插入表格" type="warning" :closable="false" class="key_alert"></el-alert>
        <el-form-item label="技术参数" prop="content">
          <Editor @event="editorHandleChange"/>
        </el-form-item>

        <el-alert show-icon title="为了更好的优化，请填写下面这些信息" type="warning" :closable="false" class="key_alert"></el-alert>
        <el-form-item label="关键词" prop="goods_key">
          <el-input v-model="proForm.goods_key"></el-input>
        </el-form-item>
        <el-form-item label="关键词描述" prop="goods_key">
          <el-input v-model="proForm.goods_key" type="textarea" style="min-height: 80px;"></el-input>
        </el-form-item>
        <el-button type="primary" @click="addNews()" style="margin: 0 auto;display: block;">添加产品</el-button>
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
  import { useRouter } from 'vue-router'
  import axios from 'axios';
  const router = useRouter()
  const proFormRef = ref()
  const store = useStore();
  const cateList = ref([])
 
  onMounted(() => {
    getCategory()
  })
  const getCategory = async () => {
    const result = await axios.get('/admin/pro/category')
    console.log(result.data.data.data)
    cateList.value = result.data.data.data
    console.log(cateList)
  }
  const proForm = reactive({
    goods_name: '',
    goods_ishome: 0,
    goods_sort: '',
    goods_cat: '',
    goods_key: '',
    goods_description: '',
    goods_overview: '',
    goods_advantage: '',
    goods_content: '',
    goods_table: '',
    vidurl: '',
    file:null  
  })
  const proFormRules = reactive({
    title:[{required:true,message:'请输入产品名称',trigger:'blur'}],
    author:[{required:true,message:'请输入作者',trigger:'blur'}],
    imgUrl:[{required:true,message:'请上传图片',trigger:'blur'}],
    content:[{required:true,message:'请输入案例内容',trigger:'blur'}]
  })
  const handleChange = (file) => {
    proForm.imgUrl = URL.createObjectURL(file)
    proForm.file = file
  }
  const editorHandleChange = (data) => {
    proForm.content = data
  }
  const addNews =() => {
    proFormRef.value.validate(async (valid) => {
      if(valid) {
        const res = await upload('/admin/new/addnew',proForm)
        const result = res.data.data
        if (result.code !== 200) return ElMessage.error(result.message)
        ElMessage.success(result.message)
        router.push('/news/newslist')
      }
    })
  }
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