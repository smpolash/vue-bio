<template>
  <footer id="footer" class="footer">
    <p>{{ copyright }}</p>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
  data () {
    return {
      copyright: 'Copyright (c) @2018'
    }
  }
}
</script>
<style>
  .footer { border-top: 1px solid #ccc; }
</style>
