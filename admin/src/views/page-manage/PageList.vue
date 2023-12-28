<template>
  <div>
    <el-card>
      <el-page-header content="页面列表" icon="" title="页面管理">
      </el-page-header>
    </el-card>
    <el-card style="margin-top: 50px;">
      <el-table :data="tableDate">
        <el-table-column label="页面名称" prop="pageName" width="280"></el-table-column>
        <el-table-column label="页面描述" prop="pageTitleImage" width="1000"></el-table-column>
        <el-table-column label="操作">
            <template #default="scope">
              <el-button circle :icon="Edit" @click="handleEdit(scope.row)"></el-button>
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
onMounted(() => {
  getTableData()
})
const getTableData = async () => {
  const result = await axios.get('/admin/page/getPage')
  tableDate.value = result.data.data.data
}
const handleEdit = async (item) => {
    router.push(`/page/editpage/${item.id}`)
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