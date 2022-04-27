<script setup lang="ts">
console.log(import.meta.env.VITE_API_URL)
</script>
<template>
  <ul class="bg-red-50">
    <li>首页</li>
    <li>商品</li>
    <li>评价</li>
  </ul>
  <router-view />
</template>
<style></style>
