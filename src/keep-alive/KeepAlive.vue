<template>
  <div>
    <b>keep-alive</b>
    <div>
      <button @click="oneFun">按钮1</button>
      <button @click="twoFun">按钮2</button>
    </div>
    <!-- <keep-alive> -->
    <component v-bind:is="currentTabComponent"></component>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
import CompOne from "./CompOne";
import CompTwo from "./CompTwo";
export default {
  name: "KeepAlive",
  components: {
    CompOne,
    CompTwo
  },
  data() {
    return {
      currentTabComponent: CompOne
    };
  },
  methods: {
    oneFun() {
      this.currentTabComponent = CompOne;
    },
    twoFun() {
      this.currentTabComponent = CompTwo;
    }
  }
};
</script>

<style>
</style>
