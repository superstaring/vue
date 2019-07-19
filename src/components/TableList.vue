<template>
  <div>
    <button @click="handleClick()">点击</button>
    <ul>
      <li v-for="(list,index) in lists" v-bind:key="list.id">
        {{index+1}}
        {{list.title}}
        <br />
        {{list.body}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TableList",
  data() {
    return {};
  },
  props: ["lists"],
  methods: {
    handleClick() {
      this.$emit("handleClick", { a: "王先生", b: "20岁" });
    }
  }
};
</script>

<style scoped>
ul {
  text-align: left;
}
</style>

