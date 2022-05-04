<script setup lang="ts"></script>

<template>
  <h2>admin-vue layouts</h2>
  <router-view />
</template>

<style lang="scss"></style>

<script lang="ts">
export default {
  route: { meta: { auth: true } },
}
</script>
