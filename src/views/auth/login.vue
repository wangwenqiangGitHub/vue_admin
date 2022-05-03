<script setup lang="ts">
import v from '@/plugins/validate'
const { Form, Field, ErrorMessage } = v

const onSubmit = (values) => {
  console.log(values)
  alert('33')
}
</script>

<template>
  <!-- {{ form }} -->
  <Form class="" @submit="onSubmit">
    <div class="w-[720px] translate-y-32 md:translate-y-0 bg-white grid md:grid-cols-2 rounded-md shadow-md">
      <div class="p-6">
        <h2 class="text-center text-gray-700 text-lg">会员登录</h2>
        <div class="mt-8">
          <Field name="account" :rules="{ required: true, email: true }" class="hd-input" :validate-on-input="true" />
          <ErrorMessage name="account" as="div" class="hd-error" />
          <Field name="password" :rules="{ required: true, min: 3 }" class="hd-input mt-3" :validate-on-input="true" />
          <ErrorMessage name="password" as="div" class="hd-error" />
        </div>
        <!-- <button class="hd-button mt-5">登录</button> -->
        <hdButton />
        <div class="flex gap-2 justify-center mt-5">
          <!-- <a href class="text-sm">网站首页</a> -->
          <hdLink />
          <a href class="text-sm">会员注册</a>
          <a href class="text-sm">找回密码</a>
        </div>
      </div>
      <div class="hidden md:block">
        <img src="/images/login.jpg" class="h-96 w-full object-cover" />
      </div>
    </div>
  </Form>
</template>

<style lang="scss">
form {
  @apply bg-slate-300 h-screen flex justify-center items-start md:items-center p-5;
}
</style>
