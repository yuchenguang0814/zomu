<template>
    <div>
      <el-card>
        <el-page-header content="产品列表" icon="" title="产品管理">
        </el-page-header>
      </el-card>
      <el-card style="margin-top: 50px;">
        <el-table :data="tableDate">
            <el-table-column label="序号" prop="sort" width="100"></el-table-column>
          <el-table-column label="缩略图" prop="imgurl" width="280">
            <template #default="scope">
              <el-image style="width: 100px; height: 100px" :src="`${publicPath }` + scope.row.image"  />
            </template>
          </el-table-column>
          <el-table-column label="产品名称" prop="name" width="280"></el-table-column>
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
          <el-table-column label="是否显示首页">
            <template #default="scope">
              <el-switch v-model="scope.row.isHome" :active-value='1' :inactive-value='0'
                @change="handleHomeSwitchChange(scope.row)"></el-switch>
            </template>
          </el-table-column>
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
    const result = await axios.get('/admin/pro/getPros')
    tableDate.value = result.data.data.data
  }
  const handlePreview = (data) => {
    previewDate.value = data
    dialogVisible.value = true
  }
  const handleSwitchChange = async (item) => {
    const res = await axios.put('/admin/pro/publish', {
      _id: item.id,
      isPublish: item.isPublish
    })
    const result = res.data.data
    if (result.code !== 200) return ElMessage.error(result.message)
    ElMessage.success(result.message)
  }
  const handleHomeSwitchChange = async (item) => {
    const res = await axios.put('/admin/pro/home', {
      _id: item.id,
      isHome: item.isHome
    })
    const result = res.data.data
    if (result.code !== 200) return ElMessage.error(result.message)
    ElMessage.success(result.message)
  }
  const handleDelete = async (item) => {
    const res = await axios.delete(`/admin/pro/delete/${item.id}`)
    const result = res.data.data
    if (result.code !== 200) return ElMessage.error(result.message)
    ElMessage.success(result.message)
    await getTableData()
  }
  const handleEdit = async (item) => {
    router.push(`/prodoct/editpros/${item.id}`)
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