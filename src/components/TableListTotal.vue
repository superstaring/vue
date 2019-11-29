

<template>
  <div>
    <router-link to="/Vue/Vuex">
      <button>Vuex</button>
    </router-link>
    <router-link to="/Vue/VuexOne">
      <button>VuexOne</button>
    </router-link>
    <router-link to="/Vue/VuexTwo">
      <button>VuexTwo</button>
    </router-link>
    <router-link to="/Vue/VuexThree">
      <button>VuexThree</button>
    </router-link>
    <router-link to="/Vue/Form">
      <button>Form</button>
    </router-link>
    <router-link to="/Vue/KeepAlive">
      <button>Keep-alive</button>
    </router-link>
    <TableHeader msg="父传子" />
    <p v-zhil:[direction]="200">人生不需要解释！</p>
    <TableList @handleClick="handleClick" v-bind:lists="lists" />
    <p v-if="show">子传父：{{content}}</p>
    <Brother />
    <button @click="tableClick()">跳转TableRoute</button>
  </div>
</template>

<script>
import TableList from "./TableList";
import TableHeader from "./TableHeader";
import Brother from "./Brother";
import $ from "jquery";

export default {
  name: "TableListTotal",
  components: { TableList, TableHeader, Brother },
  data() {
    return { show: false, lists: [], direction: "left" };
  },
  methods: {
    handleClick(data) {
      console.log(data);
      this.show = true;
      this.content = data.a;
    },
    tableClick() {
      this.$router.push(`/about/2`);
    }
  },
  created() {
    // this.$http.get("https://jsonplaceholder.typicode.com/posts").then(data => {
    //   this.lists = data.body.slice(0, 10);    //data.body
    //   console.log(this.lists);
    // });
    this.$axios.get("https://jsonplaceholder.typicode.com/posts").then(data => {
      this.lists = data.data.slice(0, 10); //data.data
      console.log(this.lists);
    });
    // var that = this;
    // $.ajax({
    //   url: "https://jsonplaceholder.typicode.com/posts",
    //   type: "get",
    //   dataType: "json",
    //   success: function(data) {
    //     that.lists = data;
    //     console.log(data);
    //   },
    //   error: function() {
    //     alert("请求失败");
    //   }
    // });
  },
  directives: {
    zhil: {
      bind(el, binding, vnode) {
        el.style.position = "fixed";
        var s = bindings.arg === "left" ? "left" : "top";
        el.style[s] = binding.value + "px";
      }
    }
  },
  filters: {}
};
</script>
