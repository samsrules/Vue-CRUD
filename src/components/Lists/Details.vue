<template>
    <div>
      <div>Details of Title of post View</div>
      <div>Id - {{ selectId }}</div>
      <div v-if="posts">
        <p>{{ posts.id }}</p>
        <p>{{ posts.title }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, watch } from "vue";
  export default {
    name: "Details",
    props: {
      selectId: {
        type: Number,
        required: true,
      },
    },
    setup(props) {
      const posts = ref(null);
      const fetchDetails = async (id) => {
        try {
          const res = await fetch("https://dummyjson.com/posts/" + id);
          const ret = await res.json();
          console.log(ret);
          posts.value = ret;
        } catch (error) {
          console.log(error);
        }
      };
      watch(
        () => props.selectId,
        (newId) => {
          console.log(newId);
          if (newId) {
            console.log("--", console.log(newId));
            fetchDetails(newId);
          }
        }
      );
      return {
        posts,
      };
    },
  };
  </script>
  