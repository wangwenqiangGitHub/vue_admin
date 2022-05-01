<script setup lang="ts">
import hdInput from '@/components/form/hd-input.vue'
import HdButton from '../../components/form/hd-button.vue'
import HdLink from '../../components/form/hd-link.vue'
</script>

<template>
  <div class="bg-slate-300 h-screen flex justify-center items-start md:items-center p-5">
    <div class="w-[720px] translate-y-32 md:translate-y-0 bg-white grid md:grid-cols-2 rounded-md shadow-md">
      <div class="p-6">
        <h2 class="text-center text-gray-700 text-lg">会员登录</h2>
        <div class="mt-8">
          <!-- <input type="text" placeholder="请输入手机号或邮箱" class="hd-input mt-3" />
          <input type="text" placeholder="请输入手机号或邮箱" class="hd-input mt-3" /> -->
          <hdInput />
          <hdInput class="mt-5" />
        </div>
        <!-- <button class="hd-button mt-5">登录</button> -->
        <HdButton />
        <div class="flex gap-2 justify-center mt-5">
          <!-- <a href class="text-sm">网站首页</a> -->
          <HdLink />
          <a href class="text-sm">会员注册</a>
          <a href class="text-sm">找回密码</a>
        </div>
      </div>
      <div class="hidden md:block">
        <img src="/images/login.jpg" class="h-96 w-full object-cover" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
// .hd-input {
//   @apply border w-full rounded-sm py-1 px-2 outline-none border-gray-200 placeholder:text-sm focus:ring-2 ring-offset-2 ring-offset-violet-600 duration-300 focus:border-white;
// }
// .hd-button {
//   @apply bg-indigo-500 text-white w-full py-2 rounded-md mt-3 hover:bg-violet-500 duration-300;
// }
</style>
