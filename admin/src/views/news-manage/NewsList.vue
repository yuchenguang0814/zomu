<template>
  <div>
    <el-card>
      <el-page-header content="案例列表" icon="" title="案例管理">
      </el-page-header>
    </el-card>
    <el-card style="margin-top: 50px;">
      <el-table :data="tableDate">
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
            <!-- <el-button circle :icon="Star" @click="handleEdit(scope.row)" type="success"></el-button> -->
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
import axios from 'axios';
import formatTime from '../../../util/formatTime'
import { ElMessage } from 'element-plus'
import { Star, Edit, Delete } from '@element-plus/icons-vue'
const tableDate = ref([])
onMounted(() => {
  getTableData()
})
const getTableData = async () => {
  const result = await axios.get('/admin/new/getNews')
  tableDate.value = result.data.data.data
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
</script>
<style>
.el-table thead {
  font-size: 20px;
  color: #000;
  line-height: 40px;
}
</style>