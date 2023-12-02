<template>
  <div class='common-layout'>
    <el-container>
      <SlideMenu></SlideMenu>
      <el-container direction='vertical'>
        <TopHeader></TopHeader>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import TopHeader from '@/components/mainbox/TopHeader.vue'
import SlideMenu from '@/components/mainbox/SlideMenu.vue'
</script>
