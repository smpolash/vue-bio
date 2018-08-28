<template>
  <header id="header" class="header">
    <h1>{{ title }}</h1>
  </header>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
      title: 'Welcome to Vue.js'
    }
  }
}
</script>
<style>
  .header { border: 1px solid #ccc; }
</style>
