// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import ListsComponent from '../../views/Lists/ListsComponent.vue';
import CustomInput from '../ChildCustomInput.vue';
import HelloWorld from '../HelloWorld.vue';
const routes = [
  { path: '/', name: 'HelloWorld', component: HelloWorld },
  { path: '/lists', name: 'ListsComponent', component: ListsComponent },
  {
    path: '/custome',
    name: 'CustomInput',
    component: CustomInput,
    //meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
