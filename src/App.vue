<script setup lang="ts">
console.log(typeof import.meta.env.VITE_SOME_KEY)
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
