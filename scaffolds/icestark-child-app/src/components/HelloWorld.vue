<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg?: string }>()

const count = ref(0)
</script>

<template>
  <div>
    <h1>{{ msg || 'Hello Vite + icestark + Vue3!' }}</h1>

    <p>
      <a href="https://v3.vuejs.org/" target="_blank">
        Learn Vue 3
      </a>
      |
      <a href="https://micro-frontends.ice.work/" target="_blank">icestark Docs</a>
    </p>

    <button type="button" @click="count++">count is: {{ count }}</button>
  </div>

</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
