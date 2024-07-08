<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <router-link to="/lists">Go to Lists</router-link>
  <router-link to="/custome">Go to Custome</router-link>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  
  
  <custom-input v-model:title="title" v-model:content="content" @childEvent="handleEvent" ref="childComp"></custom-input>
  
  <div><button @click="accessChild">Child property access</button></div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import CustomInput from './components/ChildCustomInput.vue'
import { ref } from 'vue';
export default {
  data(){
    return {
      title:'Title',
      content:'Content',
      parentProperty:'property 1'
    }
  },
  name: 'App',
  components: {
    HelloWorld,CustomInput
  },
  methods:{
    handleEvent(data){
      console.log('Received value--',data)
    }
  },
   setup() {
    const childComp = ref(null);

    const accessChild = () => {
      if (childComp.value) {
        console.log(childComp.value.childMessage);
        childComp.value.childMethod();
      }
    };

    return {
      childComp,
      accessChild
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
