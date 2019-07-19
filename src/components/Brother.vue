<template>
  <div>
    <BrotherOne/>
    <BrotherTwo/>
  </div>
</template>

<script>
import BrotherOne from "./BrotherOne";
import BrotherTwo from "./BrotherTwo";
export default {
  name: "Brother",
  components: { BrotherOne, BrotherTwo }
};
</script>

