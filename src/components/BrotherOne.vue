<template>
  <div>
    <input type="text" v-model="message" @keyup="change">
    <p>显示message:{{message}}</p>
  </div>
</template>

<script>
import Event from "./bus.js";
export default {
  name: "BrotherOne",
  data() {
    return {
      message: ""
    };
  },
  methods: {
    change() {
      Event.$emit("onChange", this.message);
    }
  }
};
</script>

