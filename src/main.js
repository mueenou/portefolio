import Vue from 'vue'
import Router from 'vue-router';
import App from './App.vue';
import "./styles/main.css";
import Home from "./components/Home";

Vue.config.productionTip = false

const router = new Router({

  routes: [
    {
      path: "/",
      component: Home,
      name: "Home"
    },
  ]

});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
