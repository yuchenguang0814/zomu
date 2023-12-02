<template>
  <el-aside :width="$store.state.isCollapsed? '64px': '200px'">
    <el-menu
    :collapse="$store.state.isCollapsed"
    :collapse-transition="false"
    :router="true"
    :default-active="route.fullPath"
    >
      <el-menu-item index="/index">
        <el-icon><HomeFilled/></el-icon>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="/center">
        <el-icon><UserFilled/></el-icon>
        <span>个人中心</span>
      </el-menu-item>
      <el-sub-menu index="/user">
        <template #title>
          <el-icon><UserFilled/></el-icon>
          <span>用户管理</span></template>
        <el-menu-item index="/user/adduser">添加用户</el-menu-item>
        <el-menu-item index="/user/userlist">用户列表</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="/news">
        <template #title>
          <el-icon><MessageBox/></el-icon>
          <span>新闻管理</span></template>
        <el-menu-item index="/news/addnews">添加新闻</el-menu-item>
        <el-menu-item index="/news/newslist">新闻列表</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="/prodoct">
        <template #title>
          <el-icon><Menu/></el-icon>
          <span>产品管理</span></template>
        <el-menu-item index="/prodoct/addproduct">添加产品</el-menu-item>
        <el-menu-item index="/prodoct/productlist">产品列表</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>
<script setup>
import { HomeFilled, UserFilled, MessageBox, Menu } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style lang="scss" scoped>
.el-aside {
  height: 100vh;
  .el-menu {
    height: 100vh;
  }
}
</style>
