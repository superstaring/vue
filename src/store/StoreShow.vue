<template>
  <div>
    <!-- <p>{{$store.state.todoList}}</p> -->
    <ul>
      <li v-for="todo in todoList" v-bind:key="todo.id">{{todo.title}}</li>
    </ul>

    <ul>
      <li v-for="item in personList" v-bind:key="item.id">{{ item.userName}}</li>
    </ul>
  </div>
</template>

<script>
import store from "./store";
import { mapState } from "Vuex";
export default {
  store,
  computed: {
    ...mapState(["todoList", "personList"])
  }
};
</script>
