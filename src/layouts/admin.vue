<script setup lang="ts"></script>

<template>
  <div class="admin h-screen w-screen flex">
    <div class="menu w-[200px] bg-gray-800">
      <div class="logo text-white">
        <i class="fas fa-robot text-fuchsia-300 mr-2 text-[25px]"></i>
        <span class="text-md">测试</span>
      </div>
    </div>
    <div class="content flex-1 bg-gray-200"></div>
  </div>
  <router-view />
</template>

<style lang="scss"></style>

<script lang="ts">
export default {
  route: { meta: { auth: true } },
}
</script>
