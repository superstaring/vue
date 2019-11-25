<template>
  <div>
    <p>{{count}}</p>
    <button>-</button>
    <button>+</button>
    <p>-----</p>
    <ul>
      <li v-for="list in lists" v-bind:key="list.id">{{list.name}}</li>
    </ul>
    <ul>
      <li v-for="list in doneTodos" v-bind:key="list.id">{{list.name}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, myGetters } from "Vuex";
import store from "./Store";

export default {
  name: "VueStoreTwo",
  // computed: {
  //   // lists() {
  //   //   return store.getters.doneTodos;
  //   // },
  //   ...mapState(["count"])
  // }
  computed: mapState({
    count: state => state.count
  })
};
</script>

<style>
</style>
