<template>
  <div>
    <el-page-header content="个人中心" icon="" title="企业网站管理系统">
    </el-page-header>
    <el-row :gutter="20">
      <el-col :span='4' style="text-align: center;">
        <el-card class="box-card">
          <el-avatar shape="square" :size="100" :src="avatarUrl" />
          <h5>
            {{ store.state.userInfo.username }}
          </h5>
        </el-card>
      </el-col>
      <el-col :span='20'>
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>企业信息</span>
                <el-form ref="userFormRef" :model="userForm" :rules="userFormRules" label-width="120px" class="demo-ruleForm"
                 status-icon>
                  <el-form-item label="用户名" prop="username">
                    <el-input v-model="userForm.username" />
                  </el-form-item>
                  <el-form-item label="公司名称" prop="companyName">
                    <el-input v-model="userForm.companyName" />
                  </el-form-item>
                  <el-form-item label="公司地址" prop="companyAddress">
                    <el-input v-model="userForm.companyAddress" />
                  </el-form-item>
                  <el-form-item label="公司邮箱" prop="userEmail">
                    <el-input v-model="userForm.userEmail" />
                  </el-form-item>
                  <el-form-item label="联系电话" prop="userPhone">
                    <el-input v-model="userForm.userPhone" />
                  </el-form-item>
                  <el-form-item label="QQ号码" prop="userQQ">
                    <el-input v-model="userForm.userQQ" />
                  </el-form-item>
                  <el-button type="primary" @click="editUser()">修改用户信息</el-button>
                  <el-button type="primary" @click="editPassworddialogVisible = true">修改密码</el-button>
                  <el-button type="primary" @click="editlogodialogVisible = true">修改logo</el-button>
                  <el-dialog v-model="editPassworddialogVisible" title="修改密码" width="30%" draggable>
                    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleFormRef" label-width="120px">
                      <el-form-item label="原始密码" prop="oldpass">
                        <el-input v-model="ruleForm.oldpass" type="password" autocomplete="off" />
                      </el-form-item>
                      <el-form-item label="新密码" prop="pass">
                        <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
                      </el-form-item>
                      <el-form-item label="确认密码" prop="checkPass">
                        <el-input v-model="ruleForm.checkPass" type="password" autocomplete="off" />
                      </el-form-item>
                    </el-form>
                    <template #footer>
                      <span class="dialog-footer">
                        <el-button @click="editPassworddialogVisible = false">取消</el-button>
                        <el-button type="primary" @click="editPassword()">
                          修改密码
                        </el-button>
                      </span>
                    </template>
                  </el-dialog>
                  <el-dialog v-model="editlogodialogVisible" title="修改logo" width="30%" draggable>
                    <el-form ref="imgFormRef" :model="imgForm" :rules="imgRules" label-width="120px" status-icon>
                      <el-form-item label="logo头像" prop="logo">
                        <Upload :logo="imgForm.logo" @kerwinchange = "handleChange" />
                      </el-form-item>

                    </el-form>
                    <template #footer>
                      <span class="dialog-footer">
                        <el-button @click="editlogodialogVisible = false">取消</el-button>
                        <el-button type="primary" @click="uploadImg()">提交修改</el-button>
                      </span>
                    </template>
                  </el-dialog>
                </el-form>
            </div>
          </template>
        </el-card></el-col>
    </el-row>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import { computed, ref, reactive} from 'vue'
import { useRouter } from 'vue-router'
import { ElDialog, ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import axios from "axios";
import upload from '../../../util/upload'
import Upload from '../../components/upload/Upload'
const router = useRouter()
const store = useStore();
const avatarUrl = computed(() => 
  store.state.userInfo.logo ? 
  'http://localhost:3000' + store.state.userInfo.logo : 
  `https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png`)
const userFormRef = ref()
const {username, name, userEmail,password, userPhone, userQQ, companyName, companyAddress, logo} = store.state.userInfo
const userForm = reactive({
  username,
  userEmail,
  userPhone,
  userQQ,
  companyName,
  companyAddress
})
const userFormRules = reactive({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
  companyName: [
    { required: true, message: '请输入公司名称', trigger: 'blur' },
  ],
  userEmail: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
  ],
  userPhone: [
    { required: true, message: '请输入联系电话', trigger: 'blur' },
  ],
  userQQ: [
    { required: true, message: '请输入QQ', trigger: 'blur' },
  ],
  companyAddress: [
    { required: true, message: '请输入公司地址', trigger: 'blur' }
  ],
})
const editPassworddialogVisible = ref(false)
const editlogodialogVisible = ref(false)
const ruleFormRef = ref()
const ruleForm = reactive({
  pass: '',
  checkPass: '',
  oldpass: ''
})
const validateoldpass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入原密码'))
  } else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass', () => null)
    }
    callback()
  }
}
const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else if (value === ruleForm.oldpass){
    callback(new Error('新密码和原始密码一致'))
  } else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass', () => null)
    }
    callback()
  }
}
const validatePass2 = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请再次输入密码'))
  } else if (value !== ruleForm.pass) {
    callback(new Error("两次输入密码不一致!"))
  } else {
    callback()
  }
}
const rules = reactive({
  oldpass: [{ validator: validateoldpass, trigger: 'blur' }],
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }]
}) 
const editUser = ()=> {
  userFormRef.value.validate((valid) => {
    if (valid) {
      axios.post('/admin/user/edit',userForm).then(res => {
        const result = res.data.data
        if (result.code !== 200) return ElMessage.error(result.message)
        ElMessage.success(result.message)
        console.log(result.data)
        store.commit('changeUserInfo',result.data)
      })
    }
  })
}
const editPassword = ()=> {
  ruleFormRef.value.validate((valid) => {
    if(valid){
      axios.post('/admin/user/editPass',ruleForm).then(res => {
        const result = res.data.data
        if (result.code !== 200) return ElMessage.error(result.message)
        ElMessage.success(result.message)
        editPassworddialogVisible.value = false
        localStorage.removeItem('token')
        store.commit('clearUserInfo')
        router.push('/login')
      }) 
    }
  })
}
const imgFormRef = ref()

const imgForm = reactive({
  logo,
  file: null
})
const imgRules = reactive({
  logo: [
    { required: true,message: '请上传图片', trigger: 'blue' },
  ]
})
const handleChange = (file) => {
  imgForm.logo = URL.createObjectURL(file)
  imgForm.file = file
}
const uploadImg = () => {
  imgFormRef.value.validate(async (valid) => {
    if(valid) {
      const res = await upload('/admin/upload',imgForm)
      const result = res.data.data
      if (result.code !== 200) return ElMessage.error(result.message)

      ElMessage.success(result.message)
      editlogodialogVisible.value = false
      const logoInfo = {
        logo: result.data
      }
      store.commit('changeUserInfo',logoInfo)
    }
   
  })
}
</script>
<style scoped>
.el-row {
  margin-top: 50px;
}
</style>