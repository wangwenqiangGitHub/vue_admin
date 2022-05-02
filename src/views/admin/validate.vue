<script setup lang="ts">
import { Form, Field, ErrorMessage, defineRule, configure, useField, useForm } from 'vee-validate'
import { ref } from 'vue'
import { required, min, max, confirmed, email } from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'
import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json'
defineRule('required', required)
defineRule('email', email)
configure({
  generateMessage: localize('zh_CN', zh_CN),
})
const { handleSubmit, errors } = useForm()
const { errorMessage: usernameError, value: usernameValue } = useField(
  'username',
  { required: true, email: true },
  { label: '用户名' },
)

const onSubmit = handleSubmit((values) => {
  console.log(values)
  alert('验证通过')
})
</script>

<template>
  <form @submit="onSubmit">
    <input type="text" v-model="usernameValue" />
    <p>{{ errors.username }}</p>
    <button>提交</button>
  </form>
</template>

<style lang="scss">
div {
  @apply flex w-screen h-screen justify-center items-center bg-green-200;
  input {
    @apply border p-2 rounded-md border-violet-500 outline-none;
  }
  button {
    @apply border bg-gray-600 px-4 rounded-md text-white;
  }
}
</style>
