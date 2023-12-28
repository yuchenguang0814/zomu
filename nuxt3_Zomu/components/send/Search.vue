<template>
  <div class="nav_search_form">
                <form onkeypress="return event.keyCode != 13;">
                  <div class="nav_search_form_mask">
                    <div class="nav_search_form_mask_inner">
                      <label for="NavSearchInput" class="nav_search_label">
                        <input type="text" class="nav_search_input" v-model="searchInfo" placeholder="Search">
                      </label>
                      <a :href="`/search/${searchInfo}`" class="search_results_main_body_btn" type="button">
                        <svg viewBox="0 0 20.7 20.7"> <use href="#ShapeSearch"></use></svg>
                      </a>
                    </div>
                  </div>
                  <div class="nav_search_form_bar" style="transform: rotate(0.0001deg);"></div>
                </form>
              </div>
  </template>
  <script setup>
  import { useRoute,useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const searchInfo = ref();
</script>
  