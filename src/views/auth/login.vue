<script setup lang="ts">
import userApi from '@/apis/userApi'
import v from '@/plugins/validate'
import { store } from '@/utils'
import { useRouter } from 'vue-router'
const router = useRouter()
const { Form, Field, ErrorMessage } = v

const schema = {
  account: { required: true, email: true },
  password: { required: true, min: 3 },
}

const onSubmit = async (values: any) => {
  const {
    result: { token },
  } = await userApi.login(values)
  store.set('token', { token })
  router.push({ name: 'home' })
}
</script>

<template>
  <Form class="" @submit="onSubmit" :validation-schema="schema" #default="{ errors }">
    <div class="w-[720px] translate-y-32 md:translate-y-0 bg-white grid md:grid-cols-2 rounded-md shadow-md">
      <div class="p-6 flex flex-col justify-between">
        <div>
          <h2 class="text-center text-gray-700 text-lg">会员登录</h2>
          <div class="mt-8">
            <Field
              name="account"
              value="www@www.com"
              class="hd-input"
              :validate-on-input="true"
              label="账号"
              placeholder="请输入邮箱或者手机号" />
            <div v-if="errors.account" class="hd-error">请输入邮箱或者手机号</div>
            <!-- <ErrorMessage name="account" as="div" class="hd-error" /> -->
            <Field
              name="password"
              value="admin"
              class="hd-input mt-3"
              :validate-on-input="true"
              label="密码"
              type="password" />
            <ErrorMessage name="password" as="div" class="hd-error" />
          </div>
          <hdButton />
          <div class="flex justify-center mt-3">
            <i class="fa-brands fa-weixin bg-green-600 text-white rounded-full p-1 cursor-pointer"></i>
          </div>
        </div>
        <div class="flex gap-2 justify-center mt-5">
          <!-- <a href class="text-sm">网站首页</a> -->
          <hdLink />
          <a href class="text-sm">会员注册</a>
          <a href class="text-sm">找回密码</a>
        </div>
      </div>
      <div class="hidden md:block relative">
        <img src="/images/login.jpg" class="absolute h-full w-full object-cover" />
      </div>
    </div>
  </Form>
</template>

<style lang="scss">
form {
  @apply bg-slate-300 h-screen flex justify-center items-start md:items-center p-5;
}
</style>
