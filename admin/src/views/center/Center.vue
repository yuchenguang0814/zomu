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
                  <el-form-item label="logo" prop="logo">
                    <el-upload
                      class="avatar-uploader"
                      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                      :show-file-list="false"
                      :auto-upload="false"
                    >
                      <img v-if="userForm.logo" :src="userForm.logo" class="avatar" />
                      <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
                    </el-upload>
                  </el-form-item>
                
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
import { Plus } from '@element-plus/icons-vue'
const store = useStore();
const avatarUrl = computed(() => store.state.userInfo.logo ? store.state.userInfo.logo : `https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png`)
const userFormRef = ref()
const {username, name, userEmail, userPhone, userQQ, companyName, logo, companyAddress} = store.state.userInfo
const userForm = reactive({
  username,
  name,
  userEmail,
  userPhone,
  userQQ,
  companyName,
  logo,
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
  logo: [
    { required: true, message: '请上传图片', trigger: 'blur' }
  ],
  companyAddress: [
    { required: true, message: '请输入公司地址', trigger: 'blur' }
  ]
})
</script>
<style scoped>
.el-row {
  margin-top: 50px;
}
::v-deep .avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
::v-deep .avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

::v-deep .avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

::v-deep .el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>