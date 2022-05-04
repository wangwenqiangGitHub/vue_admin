<script setup lang="ts"></script>

<template>
  <div class="h-screen w-screen bg-gray-700 flex flex-col justify-center items-center">
    <img src="/images/login.jpg" class="w-40 h-40 object-cover rounded-full border-8 border-white mb-5" />
    <div>
      <router-link :to="{ name: 'admin.hd' }" class="hd-button">后台管理</router-link>
      <router-link :to="{ name: 'auth.login' }" class="hd-button ml-3 hd-danger">用户登录</router-link>
    </div>
    <div class="text-gray-200 text-sm font-mono drop-shadow-md mt-6">学习技术</div>
  </div>
</template>

<style lang="scss"></style>
<script lang="ts">
export default {
  route: { name: 'home' },
}
</script>
