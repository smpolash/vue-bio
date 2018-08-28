<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Header></Header>
    <router-view/>
  </div>
</template>
<script>
import Header from '@/components/Header'
export default {
  name: 'App',
  components: { Header },
  beforeCreate: function () {
    // Called after instance has beed initialized; before $data, $watch;
    console.log('beforeCreate')
  },
  created: function () {
    // Called just after setup: $data, computed props, methods, watch;
    console.log('created')
  },
  beforeMount: function () {
    // Called right before 'render' function to be called;
    console.log('beforeMount')
  },
  mounted: function () {
    // Called after vm.$el instance created;
    console.log('mounted')
  },
  beforeUpdate: function () {
    // Called when $data changes, before DOM is patched;
    console.log('beforeUpdate')
  },
  updated: function () {
    // Called after $data changes, Virtual DOM to be re-rendered & patched;
    console.log('updated')
  },
  activated: function () {
    console.log('activated')
  },
  deactivated: function () {
    console.log('deactivated')
  },
  beforeDestroy: function () {
    console.log('beforeDestroy')
  },
  destroyed: function () {
    console.log('destroyed')
  },
  errorCaptured: function (err, vm, info) {
    console.log(`${err.stack}\n\nfound in ${info} of component`)
    return false
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}
</style>
