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
import { mapState, mapGetters } from "Vuex";

export default {
  name: "VueStoreTwo",
  computed: {
    // lists() {
    //   return store.getters.doneTodos;
    // },
    ...mapState(["count"]),
    ...mapGetters(["doneTodos"])
  }
  // computed: mapState({
  //   count: state => state.count
  // })
};
</script>

<style>
</style>
