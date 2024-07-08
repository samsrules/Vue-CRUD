<!-- CustomInput Component -->
<template>
    {{title}} {{ content }}
  <div>
    <input v-model="updateTitle" placeholder="Title"/>
    <textarea v-model="updateContent" placeholder="Content" ></textarea>
  </div>
  <button @click="childEvent">Click</button>
  <div><button @click="handleParent">Parent property access from child components</button></div>
</template>

<script>
import { ref } from 'vue';
export default {
  props:{
    title:String,
    content:String
  },
  emits:['update:title','update:content', 'childEvent'],
  computed:{
     updateTitle:{
        get(){
            return this.title;
        },
        set(value){
           this.$emit('update:title',value)
        }
     },
     updateContent:{
        get(){
            return this.content;
        },
        set(value){
           this.$emit('update:content',value)
        }
     }
  },
  methods:{
    childEvent(){
     this.$emit('childEvent','Some Data')
    },
    handleParent(){
        alert(this.$parent.parentProperty)
        
    }
    
  },
  setup() {
    const childMessage = ref('Hello from Child');

    const childMethod = () => {
      alert('Child method called!');
    };

    return {
      childMessage,
      childMethod
    };
  }


};


</script>
