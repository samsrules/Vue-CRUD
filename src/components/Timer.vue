<template>
    <div class="hello">
      <h1>{{ msg }}</h1>
      <h2>{{ count }}</h2>
      <div>
        <button @click="handleStart" v-if="!isRunning">Start</button
        ><button @click="handleStop">Stop</button
        ><button @click="handleReset">Reset</button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from "vue";
  export default {
    name: "HelloWorld",
    props: {
      msg: String,
    },
    setup() {
      const count = ref(0);
      const isRunning = ref(false);
      let timer = null;
      const handleStart = () => {
        console.log("me");
        timer = setInterval(() => {
          count.value++;
        }, 1000);
      };
      const handleStop = () => {
        clearInterval(timer);
      };
      const handleReset = () => {
        count.value = 0;
        clearInterval(timer);
      };
      onMounted(() => {
        console.log("Timer mounted");
      });
      onUnmounted(() => {
        if (timer) {
          clearInterval(timer);
        }
      });
      return {
        count,
        handleStart,
        handleStop,
        handleReset,
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
  }
  a {
    color: #42b983;
  }
  </style>
  