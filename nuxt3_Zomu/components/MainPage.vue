<template>
  <div :class="`main_pages  ${props.class}`">
    <ul class="pagination">
      <li :class="`${pageIndex == index ? 'active': ''}`" v-for="index in totalPages"
      :key="index" @click= currentPage(index)
      >
      <a :href="`/${props.class}/page-${index}/${props.id}`"><span>{{index}}</span></a></li>
    </ul>
  </div>
</template>
<script setup>
import { defineProps,defineEmits } from 'vue';
import { useRoute } from 'vue-router'
const route = useRoute()
const pageIndex = ref(1)

if(route.params.page) {
  pageIndex.value = route.params.page
}

const publicPath = 'http://47.99.161.248:3800'
const props = defineProps({
    total: { type: [Number, String], default: 4 }, // 总数 The total number of
    pageNum: { type: [Number, String], default: 1 }, // 当前页数 The current number of pages
    pageSize: { type: [Number, String], default: () => 4 }, // 每页显示条数 Size of entries per page
    id: { type: [Number, String], default: 'all' },
    class:String
    // 可选
});
console.log(props.class)
// 总页数
// const query = {
//   id: props.id,
//   page: 2
// }

// const { data } = await useFetch( publicPath + `/web/pro/getProByCid/${JSON.stringify(query)}`, {method: 'get'})
// console.log(data.value.data.data)
const totalPages = computed(() => Math.ceil(props.total.num / props.pageSize))

// const emit = defineEmits(["pageChange"]);
// const currentPage = async(index) => {
//   const emitData = {
//     index:index,
//     data: data.value
//   }
//   emit("page-change", emitData);
// }
</script>
<style>
 .main_pages {
        display: -webkit-box;
        display: -moz-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        position: fixed;
        bottom: 0%;
        left: 50%;
        z-index: 999;
        transform: translateX(-50%);
      }
      
      .main_pages .pagination {
        -moz-box-shadow: 2px 0 35px rgba(21, 53, 129, 0.2) inset;
        -webkit-box-shadow: 2px 0 35px rgba(21, 53, 129, 0.2) inset;
        box-shadow: 2px 0 35px rgba(21, 53, 129, 0.2) inset;
        background: #fff;
        border-radius: 50px;
        padding: 0 10px;
        margin: 60px 0 0 0;
        list-style-type: none;
        display: flex;
        background-color: rgba(157, 41, 51);
      }
      .main_pages.sol {
        bottom: 15%;
        transform: translateX(50%);
      }
      .main_pages .pagination li {
        font-size: 16px;
        color: #fff;
        width: 50px;
        text-align: center;
        position: relative;
        cursor: pointer;
        margin: 0 5px;
      }
      .main_pages .pagination li a {
        color: #fff;
      }
      
      .main_pages .pagination li.active:before {
        content: "";
        display: block;
        position: absolute;
        top: -10px;
        background-image: url(/images/icon_pages_bg.png);
        background-repeat: no-repeat;
        width: 50px;
        height: 68px;
        background-size: cover
      }
      
      .main_pages .pagination li.active span {
        color: #fff;
        position: relative;
        z-index: 2;
        margin-top: 10px;
        display: block;
      }
      .main_pages .pagination li span {
        margin-top: 5px;
        display: block;
      }
      .main_pages .pagination li.disabled {
        margin-top: 20px
      }
      @media (max-width: 912px) {
        .main_pages .pagination {
          padding: 0 10px;
          margin: 25px 0 0 0
        }
      
        .main_pages .pagination li {
          font-size: 14px;
          width: 26px
        }
      
        .main_pages .pagination li a {
          padding: 10px 0
        }
      
        .main_pages .pagination li.active:before {
          top: -6px;
          left: -2px;
          width: 30px;
          height: 42px
        }
      
        .main_pages .pagination li.active span {
          margin-top: 5px
        }
      
        .main_pages .pagination li.disabled {
          margin-top: 10px
        }
      }
</style>