<template>
  <div id="app">
    <Slider msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Slider from './components/Slider.vue'

export default {
  name: 'App',
  components: {
    Slider
  }
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  display: grid;
  height: 100vh;
}
</style>
