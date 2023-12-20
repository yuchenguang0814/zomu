<template>
  <div>
    <el-card>
      <el-page-header content="案例列表" icon="" title="案例管理">
      </el-page-header>
    </el-card>
    <el-card style="margin-top: 50px;">
      <el-table :data="tableDate">
        <el-table-column label="缩略图" prop="imgurl" width="280">
          <template #default="scope">
            <el-image style="width: 100px; height: 100px" :src="`${publicPath }` + scope.row.imgurl"  />
          </template>
        </el-table-column>
        <el-table-column label="标题" prop="title" width="280"></el-table-column>
        <el-table-column label="更新时间">
          <template #default="scope">
            {{ formatTime.getTime(scope.row.createtime) }}
          </template>
        </el-table-column>
        <el-table-column label="是否发布">
          <template #default="scope">
            <el-switch v-model="scope.row.isPublish" :active-value='1' :inactive-value='0'
              @change="handleSwitchChange(scope.row)"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button circle :icon="Star" @click="handlePreview(scope.row)" type="success"></el-button>
            <el-button circle :icon="Edit" @click="handleEdit(scope.row)"></el-button>
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
          <el-image style="width: 100%;" :src="`${publicPath }` + previewDate.imgurl"  />
          <h2>{{previewDate.title}}</h2>
          <span style="font-size:14px;color:#333"> {{ formatTime.getTime(previewDate.createtime) }}</span>
          <br>
          <span style="font-size:14px;color:#333">{{previewDate.author}}</span>
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
  const result = await axios.get('/admin/new/getNews')
  tableDate.value = result.data.data.data
}
const handlePreview = (data) => {
  previewDate.value = data
  console.log(data)
  dialogVisible.value = true
}
const handleSwitchChange = async (item) => {
  const res = await axios.put('/admin/new/publish', {
    _id: item.id,
    isPublish: item.isPublish
  })
  const result = res.data.data
  if (result.code !== 200) return ElMessage.error(result.message)
  ElMessage.success(result.message)
}

const handleDelete = async (item) => {
  const res = await axios.delete(`/admin/new/delete/${item.id}`)
  const result = res.data.data
  if (result.code !== 200) return ElMessage.error(result.message)
  ElMessage.success(result.message)
  await getTableData()
}
const handleEdit = async (item) => {
  router.push(`/news/editnews/${item.id}`)
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