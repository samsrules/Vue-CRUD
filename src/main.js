import { createApp } from 'vue'
import App from './App.vue'
import router from './components/router';
const app = createApp(App)
// state container
import { createPinia } from 'pinia';
const pinia = createPinia();
app.use(pinia);
//router

router.beforeEach((to, from, next) => {
    const isAuthenticated = false; // Replace with actual authentication check
  
    if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
      next({ name: 'Login' });
    } else {
      next();
    }
  });
  
app.use(router);


app.mount('#app')
