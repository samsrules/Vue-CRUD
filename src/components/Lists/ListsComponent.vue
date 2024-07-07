<template>
    <div class="hello">
      <h1>{{ msg }}</h1>
      <Details v-if="selectId" :selectId="selectId" />
      <div>
        <ul v-if="data.length">
          <li v-for="v in data" :key="v.id" @click="handleId(v.id)">
            {{ v.id }}
          </li>
        </ul>
        <p v-else>Loading...</p>
      </div>
    </div>
  </template>
  
  <script>
  import {
    ref,
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
    onErrorCaptured,
    onRenderTracked,
    onRenderTriggered,
  } from "vue";
  import Details from "./Details.vue";
  export default {
    name: "HelloWorld",
    props: {
      msg: String,
    },
    components: {
      Details,
    },
    data() {
      return {
        title: "Hello tilte",
      };
    },
    setup() {
      const data = ref([]);
      const selectId = ref(null);
      const fetchData = async () => {
        try {
          const ret = await fetch("https://dummyjson.com/posts");
          const result = await ret.json();
          data.value = result.posts;
        } catch (error) {
          console.log("error");
        }
      };
      const handleId = (val) => {
        selectId.value = val;
      };
      onMounted(() => {
        console.log("mounted");
        fetchData();
      });
      onBeforeMount(() => {
        console.log("beforeMount");
      });
  
      onBeforeUpdate(() => {
        console.log("beforeUpdate");
      });
  
      onUpdated(() => {
        console.log("updated");
      });
  
      onBeforeUnmount(() => {
        console.log("beforeUnmount");
      });
  
      onUnmounted(() => {
        console.log("unmounted");
      });
  
      onErrorCaptured((err, instance, info) => {
        console.error("errorCaptured", err, instance, info);
        return false; // returning false prevents the error from propagating further
      });
  
      onRenderTracked((e) => {
        console.log("renderTracked", e);
      });
  
      onRenderTriggered((e) => {
        console.log("renderTriggered", e);
      });
      return {
        data,
        handleId,
        selectId,
      };
    },
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
    cursor: pointer;
  }
  a {
    color: #42b983;
  }
  </style>
  