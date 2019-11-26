<template>
  <div>
    <p>{{item}}</p>
    <p>{{doubleCount}}</p>
    <p>{{list}}</p>
  </div>
</template>

<script>
import { mapGetters } from "Vuex";
import store from "./ModuleStore";
export default {
  name: "VueStoreThree",
  computed: {
    item() {
      return store.state.a; // -> moduleA 的状态
    },
    list() {
      return store.state.b; // -> moduleB 的状态
    },
    ...mapGetters(["doubleCount"])
  }
};
</script>

<style>
</style>
