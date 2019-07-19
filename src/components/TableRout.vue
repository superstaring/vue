<template>
  <div>
    111
    <button @click="backClick">回退</button>
    <p>路由的值:{{data}}</p>
  </div>
</template>

<script>
export default {
  name: "TableRout",
  data() {
    return {
      data: this.$route.params.id
    };
  },
  methods: {
    backClick() {
      this.$router.go(-1);
    }
  }
};
</script>
