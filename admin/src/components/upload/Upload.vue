<template>
  <el-upload
    class="avatar-uploader"
    :show-file-list="false"
    :before-upload="beforeAvatarUpload"
    :on-change="handleChange"
    :on-remove="handleRemove"
  >
    <img v-if="porps.logo" :src="uploadImg" class="avatar" />
    <el-icon v-else class="avatar-uploader-icon">
      <Plus /></el-icon>
  </el-upload>
</template>
<script setup>
import { computed, defineEmits,defineProps,ref } from 'vue';
import { ElMessage } from 'element-plus'
import { Plus,Delete } from '@element-plus/icons-vue'
const porps = defineProps({
  logo: String
})
const disabled = ref(true)
const emit = defineEmits(['kerwinchange'])
const uploadImg = computed(() => 
  porps.logo.includes("blob") ? 
  porps.logo : 
  'http://localhost:3000' + porps.logo)
const handleChange = (file) => {
  emit('kerwinchange',file.raw)
}
const beforeAvatarUpload = (rawFile) => {
  if (rawFile.size / 1024 / 1024 > 2) {
    // 图片的大小是不是在2mb之下
    ElMessage.error("图片的大小是不是在2mb之下");
    return false;
  }
  return true;
};
const handleRemove = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles)
}
</script>

<style scoped>

:deep() .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
:deep() .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

:deep() .el-upload:hover {
  border-color: var(--el-color-primary);
}

:deep() .el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>