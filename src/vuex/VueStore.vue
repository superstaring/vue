<template>
  <div>
    <p>1.state</p>
    <p>{{count}}</p>
    <p>2.getters</p>
    <ul>
      <li v-for="list in doneTodos" v-bind:key="list.id">{{list.name}}</li>
    </ul>
    <p>3.mutations</p>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
    <p>4.actions</p>
    <button>-</button>
    <button @click="increment3">+</button>
  </div>
</template>

<script>
export default {
  name: "VueStore",
  computed: {
    count() {
      return this.$store.state.count; //state
    },
    doneTodos() {
      return this.$store.getters.doneTodos; //getters
    }
  },
  methods: {
    increment() {
      this.$store.commit("increment"); //mutations
    },
    decrement() {
      this.$store.commit("decrement"); //mutations
    },
    increment3() {
      this.$store.dispatch("increment3"); //actions
    }
  }
};
</script>

<style>
</style>
