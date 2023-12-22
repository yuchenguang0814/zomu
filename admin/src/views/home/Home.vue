<template>
  <div>
    <el-card><el-page-header content="首页" icon="" title="企业网站管理系统">
    </el-page-header></el-card>
    
    <el-card class="box-card">
      <el-row>
        <el-col :span="4"><el-avatar shape="square" :size="100" :src="avatarUrl" /></el-col>
        <el-col :span="20">
          <h3 style="line-height: 60px;">
            欢迎{{ store.state.userInfo.username }} 回来
          </h3>
        </el-col>
      </el-row>  
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>公司产品</span>
          <el-carousel :interval="4000" type="card" height="400px">
            
            <el-carousel-item v-for="item in tableDate" :key="item.id">
              <div class="item-h3" :style="{
                backgroundImage: `url(${publicPath}${item.image})`,
                backgroundSize: 'contain',
                height:'100%',
                display: 'flex',
                alignItems:'center'
            }"><h3 text="2xl" justify="center">{{ item.name }}</h3></div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </template>
    </el-card>
  </div>
</template>
<script setup>
import axios from "axios";
import { useStore } from "vuex";
import { computed, ref, onMounted } from 'vue'

const tableDate = ref([])
const store = useStore();
onMounted(() => {
    getTableData()
  })
  const getTableData = async () => {
    const result = await axios.get('/admin/pro/getPros')
    tableDate.value = result.data.data.data
  }
  const publicPath = 'http://localhost:3000'
const avatarUrl = computed(() => 
  store.state.userInfo.logo ? 
  'http://localhost:3000' + store.state.userInfo.logo : 
  `https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png`)

  </script>
<style scoped>
.box-card {
  margin-top: 50px;
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  display: block;
  margin: auto 0;
  text-align: center;
  width: 100%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
