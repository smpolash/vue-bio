<template>
  <el-container id="app" class="app">
    <!-- <img src="./assets/logo.png"> -->
    <el-header>Header</el-header>
    <el-aside width="200px">Aside</el-aside>

    <el-main>
      <router-view/>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>
<script>
// Import <header>, <footer> layout..
import Header from '@/components/Header'
import Footer from '@/components/Footer'
// Main App component
export default {
  name: 'App',
  components: { Header, Footer },
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
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
