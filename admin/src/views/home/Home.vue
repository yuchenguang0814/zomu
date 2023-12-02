<template>
    <div>
        Home
    </div>
</template>
<script setup>
import axios from 'axios';
import { useStore } from 'vuex';
const store = useStore()
axios.get('/admin/home').then(res => {
    console.log(store.state)
})
</script>