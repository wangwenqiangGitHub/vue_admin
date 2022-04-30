<script setup lang="ts">
import helper from './utils/helper'
// console.log(import.meta.env.VITE_API_URL)
// console.log(typeof helper.env.VITE_SOME_KEY)
import userApi from './apis/userApi'

// const response = await userApi.info()
// console.log(response.result.avatar)
// const respose = await fetch(`http://localhost:3000/api/info`).then((r) => r.json())
// console.log(respose.data.name)

// const responselogin = await userApi.login()
// console.log(responselogin.result.token)
</script>
<template>
  <ul class="bg-red-50">
    <!-- <li>首页</li>
    <li>商品</li>
    <li>评价</li> -->
  </ul>
  <router-view />
</template>
<style></style>
