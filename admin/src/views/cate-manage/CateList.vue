<template>
  <div>
    <el-card>
      <el-page-header content="分类列表" icon="" title="分类管理">
      </el-page-header>
    </el-card>
    <el-card style="margin-top: 50px;">
      <el-table :data="tableDate">
        <el-table-column label="序号" prop="pagePath" width="100"></el-table-column>
        <el-table-column label="缩略图" prop="pageImage" width="280">
          <template #default="scope">
            <el-image style="width: 100px; height: 100px" :src="`${publicPath }` + scope.row.pageImage"  />
          </template>
        </el-table-column>
        <el-table-column label="分类名称" prop="pageName" width="280"></el-table-column>
        <el-table-column label="分类描述" prop="pageTitleImage"></el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <!-- <el-button circle :icon="Star" @click="handlePreview(scope.row)" type="success"></el-button> -->
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
    </el-card>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios';
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
  const result = await axios.get('/admin/cate/getcates')
  tableDate.value = result.data.data.data
  console.log(tableDate.value)
}
const handleDelete = async (item) => {
  const res = await axios.delete(`/admin/cate/delete/${item.cid}`)
  const result = res.data.data
  if (result.code !== 200) return ElMessage.error(result.message)
  ElMessage.success(result.message)
  await getTableData()
}
const handleEdit = async (item) => {
  router.push(`/cates/editcates/${item.cid}`)
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