<template>
  <div>
    <p>显示info：{{info}}</p>
  </div>
</template>

<script>
import Event from "./bus.js";
export default {
  name: "BrotherTwo",
  data() {
    return {
      info: ""
    };
  },
  mounted() {
    var that = this;
    Event.$on("onChange", function(data) {
      console.log(data);
      that.info = data;
    });
  }
};
</script>

