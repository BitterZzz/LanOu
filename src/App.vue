<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <home/>
    <router-view />
  </div>
</template>

<script>
import home from "./pages/home/home";
export default {
  name: "App",
  components: {
    [home.name]: home
  }
};
</script>

<style lang="scss">
@import "assets/reset.scss";
#app {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
</style>

