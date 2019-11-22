<template>
  <div>
    <input type="radio" v-model="picked" value="男" />
    <label for="男">男</label>
    <br />
    <input type="radio" v-model="picked" value="女" />
    <label for="女">女</label>
    <br />
    <p>{{picked}}</p>

    <input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />
    <label>yes</label>
    <br />
    <p>{{toggle}}</p>

    <input type="checkbox" v-model="toggles" value="Jack" />
    <label>Jack</label>
    <br />
    <input type="checkbox" v-model="toggles" value="John" />
    <label>John</label>
    <br />
    <p>{{toggles}}</p>

    <input type="text" v-model="text" />
    <br />
    <p>{{text}}</p>

    <br />
    <select v-model="selected">
      <option
        v-for="option in options"
        v-bind:value="option.value"
        v-bind:key="option.value"
      >{{option.text}}</option>
    </select>
    <p>selected:{{selected}}</p>
    <br />
    <p>Computed：</p>
    <div id="example">
      <p>Original message: "{{ message }}"</p>
      <p>Computed reversed message: "{{ reversedMessage }}"</p>
    </div>
    <br />

    <b>具名插槽:</b>
    <b>具名插槽缩写#:</b>
    <Slot>
      <template #aa>
        <div>aa</div>
      </template>
      <template v-slot:bb>
        <div>bb</div>
      </template>
    </Slot>

    <b>作用域插槽：</b>
    <ScopeSlot v-slot="{user}">{{user.userName}}:{{user.userAge}}</ScopeSlot>
    <!--
  v-slot:default="slotProps" 作用域插槽
  v-slot="slotProps"
  v-slot="{user}"    解构插槽 Prop
    -->
  </div>
</template>

<script>
import Slot from "./Slot";
import ScopeSlot from "./ScopeSlot";
export default {
  name: "Form",
  components: { Slot, ScopeSlot },
  data() {
    return {
      picked: "",
      toggle: "",
      toggles: [],
      text: "",
      selected: "A",
      options: [
        { text: "One", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" }
      ],
      message: "HELLO!"
    };
  },
  computed: {
    reversedMessage: function() {
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>

<style>
</style>
