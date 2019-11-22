<template>
  <span>
    <slot v-bind:user="user"></slot>
  </span>
</template>

<script>
export default {
  name: "ScopeSlot",
  data() {
    return {
      user: { userName: "张三", userAge: "10" }
    };
  }
};
</script>

<style>
</style>
