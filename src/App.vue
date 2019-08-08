<template>
  <div id="app" class="clearfix">
    <!-- <img src="./assets/logo.png"> -->

    <router-view />
  </div>
</template>

<script>
import home from "./pages/home/home";
export default {
  name: "App",
};
</script>

<style lang="scss">
@import "assets/reset.scss";
#app {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: #ffffff;
}
</style>

