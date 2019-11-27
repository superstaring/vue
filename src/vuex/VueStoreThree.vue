<template>
  <div>
    <p>{{item}}</p>
    <p>{{list}}</p>
    <p>mapState: countA:{{countA}} countB:{{countB}}</p>
    <p>mapGetters: doubleCountA:{{doubleCountA}} doubleCountB: {{doubleCountB}}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from "Vuex";
import store from "./ModuleStore";
export default {
  name: "VueStoreThree",
  computed: {
    // item() {
    //   return store.state.a; // -> moduleA 的状态
    // },
    // list() {
    //   return store.state.b; // -> moduleB 的状态
    // },
    ...mapState({
      countA: state => state.a.countA,
      countB: state => state.b.countB
    }),
    ...mapGetters(["doubleCountA", "doubleCountB"])
  }
};
</script>

<style>
</style>
