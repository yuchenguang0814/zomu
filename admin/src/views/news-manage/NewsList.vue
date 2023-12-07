<template>
  <div>
    <el-card>
      <el-page-header content="案例列表" icon="" title="案例管理">
      </el-page-header>
    </el-card>
    <el-card>
      <el-table :data="tableDate">
        <el-table-column label="title" prop="新闻标题" width="180"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script setup>
import {ref, onMounted} from 'vue'
import axios from 'axios';
onMounted(()=> {
  getTableData()
})
const getTableData= async () => {
  const result = await axios.get('/admin/new/getNews')
  console.log(result)
}
</script>
