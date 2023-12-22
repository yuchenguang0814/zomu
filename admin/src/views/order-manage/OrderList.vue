<template>
  <div>
    <el-card>
      <el-page-header content="留言列表" icon="" title="留言管理">
      </el-page-header>
    </el-card>
    <el-card style="margin-top: 50px;">
      <el-table :data="tableDate">
        
        <el-table-column label="留言时间">
          <template #default="scope">
            {{ formatTime.getTime(scope.row.createtime) }}
          </template>
        </el-table-column>
        <el-table-column label="用户名" prop="user" width="180"></el-table-column>
        <el-table-column label="联系方式" prop="phone" width="180"></el-table-column>
        <el-table-column label="内容" prop="content" width="680"></el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button circle :icon="Star" @click="handlePreview(scope.row)" type="success"></el-button>
              <el-popconfirm 
              title="你确定要删除吗?"
              confirmButtonText="确定"
              cancelButtonText="取消"
              @confirm = "handleDelete(scope.row)"
              >
                <template #reference>
                  <el-button circle :icon="Delete" type="danger"></el-button>
                </template>
              </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog v-model="dialogVisible" title="预览案例" width="50%" draggable>
        <div>
          <h2>{{previewDate.user}}</h2>
          <h2>{{previewDate.phone}}</h2>
          <span style="font-size:14px;color:#333"> {{ formatTime.getTime(previewDate.createtime) }}</span>
          <br>
          <el-divider>
      <el-icon><star-filled /></el-icon>
    </el-divider>
    <div v-html="previewDate.content" class="htmlContent"></div>
        </div>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
          </span>
        </template>
      </el-dialog>
    </el-card>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios';
import formatTime from '../../../util/formatTime'
import { ElMessage,ElDialog } from 'element-plus'
import { Star, Edit, Delete,StarFilled  } from '@element-plus/icons-vue'
const router = useRouter()
const tableDate = ref([])
const publicPath = 'http://localhost:3000'
const dialogVisible = ref(false)
const previewDate = ref({})
onMounted(() => {
  getTableData()
})
const getTableData = async () => {
  const result = await axios.get('/admin/order/getorder')
  tableDate.value = result.data.data.data
}
const handlePreview = (data) => {
  previewDate.value = data
  dialogVisible.value = true
}

const handleDelete = async (item) => {
  const res = await axios.delete(`/admin/order/delete/${item.id}`)
  const result = res.data.data
  if (result.code !== 200) return ElMessage.error(result.message)
  ElMessage.success(result.message)
  await getTableData()
}
</script>
<style lang="scss" scoped>
.el-table thead {
  font-size: 20px;
  color: #000;
  line-height: 40px;
}
:deep() .htmlContent {
  img {
    max-width:100%
  }
}
</style>