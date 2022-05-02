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
const { handleSubmit, errors } = useForm({
  initialValues: {
    username: 'yeezy',
    password: '',
  },
  validationSchema: {
    username: { required: true, email: true },
    password: { required: true },
  },
})
const { value: usernameValue } = useField('username', {}, { label: '用户名' })
const { value: passwordValue } = useField('password', {}, { label: '密码' })

const onSubmit = handleSubmit((values) => {
  console.log(values)
  alert('验证通过')
})
</script>

<template>
  <form @submit="onSubmit">
    <section>
      <input type="text" v-model="usernameValue" />
      <p class="error" v-if="errors.username">{{ errors.username }}</p>
    </section>
    <section>
      <input type="text" v-model="passwordValue" />
      <p class="error" v-if="errors.password">{{ errors.password }}</p>
    </section>
    <button>提交</button>
  </form>
</template>

<style lang="scss">
div {
  @apply flex w-screen h-screen justify-center items-center bg-green-200;
  input {
    @apply border-4 p-2 rounded-md border-violet-500 outline-none;
  }
  button {
    @apply border bg-gray-600 px-4 rounded-md text-white;
  }
  .error {
    @apply bg-red-600 border border-gray-800 p-2 text-white;
  }
}
</style>
