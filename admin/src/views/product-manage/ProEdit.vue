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
      <el-form-item label="产品名称" prop="name">
        <el-input v-model="proForm.name"></el-input>
      </el-form-item>
      <el-form-item label="产品分类" prop="c_id">
          <el-select v-model="proForm.c_id" placeholder="请选择商品类别" v-if="cateList">
              <el-option
                v-for="item in cateList"
                :key="item.cid"
                :label="item.pageName"
                :value="item.cid"
                >
              </el-option>
          </el-select>
      </el-form-item>
      <el-form-item label="产品序号" prop="sort">
          <el-input-number v-model="proForm.sort" :min="1"  controls-position="right" size="small"/>
      </el-form-item>
      <el-alert show-icon title="为了更美观，图片尺寸选择800*800，png格式的原图" type="warning" :closable="false" class="key_alert"></el-alert>
      <el-form-item label="产品图片" prop="image">
        <Upload :logo="proForm.image" @kerwinchange = "handleChange" />
      </el-form-item>
      <el-form-item label="视频地址" prop="vidurl">
        <el-input v-model="proForm.vidurl"></el-input>
      </el-form-item>
      <el-form-item label="产品概述" prop="overView">
        <el-input
          v-model="proForm.overView"
          :autosize="{ minRows: 4, maxRows: 6 }"
          type="textarea"
          
        />
      </el-form-item>
      <el-alert show-icon title="请插入样品图和输入应用范围" type="warning" :closable="false" class="key_alert"></el-alert>
      <el-form-item label="适用范围" prop="advantage">
        <Editor @event="editorAdvantageHandleChange" :content="proForm.advantage" v-if="proForm.advantage"/>
        <Editor @event="editorAdvantageHandleChange" content="" v-else/>
      </el-form-item>
      <el-alert show-icon title="插入技术参数表格" type="warning" :closable="false" class="key_alert"></el-alert>
      <el-form-item label="技术参数" prop="content">
        <Editor02 @event="editorContentHandleChange" :content="proForm.content" v-if="proForm.content"/>
        <Editor02 @event="editorContentHandleChange" content="" v-else/>
      </el-form-item>

      <el-alert show-icon title="为了更好的优化，请填写下面这些信息" type="warning" :closable="false" class="key_alert"></el-alert>
      <el-form-item label="关键词" prop="pageKey">
        <el-input v-model="proForm.pageKey"></el-input>
      </el-form-item>
      <el-form-item label="关键词描述" prop="pageDescription">
        <el-input v-model="proForm.pageDescription" type="textarea" style="min-height: 80px;"></el-input>
      </el-form-item>
      <el-button type="primary" @click="addPro()" style="margin: 0 auto;display: block;">更新产品</el-button>
    </el-form>
    
    
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import {ref, reactive,onMounted} from 'vue'
import upload from '../../../util/upload'
import Upload from '../../components/upload/Upload'
import Editor from '../../components/editor/Editor'
import Editor02 from '../../components/editor/Editor02'
import { ElMessage } from 'element-plus'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios';
const router = useRouter()
const route = useRoute()
const proFormRef = ref()
const store = useStore();
const cateList = ref([])
let isShowEdit = ref(false)
const getCategory = async () => {
  const result = await axios.get('/admin/pro/category')
  cateList.value = result.data.data.data
}
const proForm = reactive({
  name: '',
  isHome: 0,
  sort: '',
  c_id: '',
  pageKey: '',
  image:'',
  pageDescription: '',
  overView: '',
  advantage: '',
  content: '',
  vidurl: '',
  isPublish:'0',
  file:null  
})
const proFormRules = reactive({
  name:[{required:true,message:'请输入产品名称',trigger:'blur'}],
  sort:[{required:true,message:'请输入序号',trigger:'blur'}],
  image:[{required:true,message:'请上传图片',trigger:'blur'}],
})
const handleChange = (file) => {
  proForm.image = URL.createObjectURL(file)
  proForm.file = file
}
const editorAdvantageHandleChange = (data) => {
  proForm.advantage = data
}
 const editorContentHandleChange = (data) => {
  proForm.content = data
}
const addPro =() => {
  proFormRef.value.validate(async (valid) => {
    if(valid) {
    const res = await upload('/admin/pro/getPros',proForm)
    const result = res.data.data
    if (result.code !== 200) return ElMessage.error(result.message)
    ElMessage.success(result.message)
    router.back()
    }
  })
}
onMounted(async () => {
  const result = await axios.get(`/admin/pro/getPros/${route.params.id}`)
  Object.assign(proForm,result.data.data.data[0])
  getCategory()
  isShowEdit.value = true
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