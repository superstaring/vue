<template>
  <div>
    <Element-Form />
    <!-- <ElementRuleForm /> -->
  </div>
</template>

<script>
import ElementForm from "./ElementForm";
import ElementRuleForm from "./ElementRuleForm";
export default {
  name: "ElementUi",
  components: { ElementForm, ElementRuleForm }
};
</script>

<style></style>
