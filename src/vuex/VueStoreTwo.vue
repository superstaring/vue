<template>
  <div>
    <p>1. mapState:{{count}}</p>
    <ul>
      <li v-for="list in lists" v-bind:key="list.id">{{list.name}}</li>
    </ul>
    <p>2. mapGetters:</p>
    <ul>
      <li v-for="list in doneTodos" v-bind:key="list.id">{{list.name}}</li>
    </ul>
    <p>3. mapMuntations:</p>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
    <p>
      4. mapActions:
      <button @click="newCount">点击1</button>
      <!-- <button @click="increment">点击2</button> -->
    </p>
    <b>state和getters是在computed计算属性里；mutations和actions是在methods方法里</b>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "Vuex";

export default {
  name: "VueStoreTwo",
  computed: {
    ...mapState(["count", "lists"]),
    ...mapGetters(["doneTodos"])
  },
  // computed: mapState({
  //   count: state => state.count
  // })
  methods: {
    ...mapMutations(["increment", "decrement"]),
    ...mapActions({ newCount: "increment3" })
    // ...mapActions(["increment"])
  }
};
</script>

<style>
</style>
