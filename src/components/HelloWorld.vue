<template v-slot:helloworld>
    Replaces slot-scope from Vue 2, used for named slots in templates.
  <div class="hello">
    In Vue 3, v-model can accept arguments to bind multiple props with different names.
    <h1>{{ msg }}</h1>
    <h1>{{ value1 }}</h1>
    <h1>{{ value2 }}</h1>
    <br />
    <p v-cloak>
      Keep the element and its children hidden until Vue's compilation is done. {{ message }}
    </p>
    Dynamically bind one or more attributes, or a component prop, to an expression.
    Shorthand: :

    <p><a v-bind:href="url">Link</a>
      <!-- or using shorthand -->
      <a :href="url">Link</a>
    </p>
    <p v-show="isVisible">You can see me</p>
    Attach event listeners that invoke methods on Vue instances.
    <button @click="handleButton">Click me</button>


    <p v-if="type === 'A'">Type A</p>
    <p v-else-if="type === 'B'">Type B</p>
    <p v-else>Other Type</p>
    <p><span v-pre>Skip compilation for this element and all its children. {{ this will not be compiled }}</span></p>
   <div>
    Render the element and component once and skip future updates.
    <p v-once>This will never change: {{ message }}</p>
    <a target="_blank" rel="noopener" @click="handleButton">vue-cli documentation</a>

    <div v-if="seen">Hello Compoonent</div>
    <div v-else>else Component</div>

    <div>
      <ul v-if="lists.length > 0">
        <li v-for="val in lists" :key="val.id" @click="handleButton">
          {{ val.text }}
        </li>
        <br />
      </ul>
    </div>
    <div>The v-model directive binds a form input element (like input, textarea, select)</div>

    <div>Create a Store
      Create a store using Pinia.</div>
  </div>

  </div>
</template>
<script>
//src/stores/counter.js
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    }
  }
});

export default {
  name: "HelloWorld",
  props: {
    msg: String,
    value1: String,
    value2: String,
  },
  data() {
    return {
      url: "https://vuejs.org",
      seen: true,
      message: "Mounted",
      type: 'A',
      lists: [
        { id: 1, text: "Item 1" },
        { id: 2, text: "Item 2" },
        { id: 3, text: "Item 3" },
      ],
    };
  },
  methods: {
    handleButton() {
      console.log("Hello---");
    },
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
