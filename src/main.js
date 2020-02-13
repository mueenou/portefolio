import Vue from 'vue'
import Router from 'vue-router';
import App from './App.vue';
import "./styles/main.css";
import Home from "./components/Home";

Vue.config.productionTip = false

Vue.directive("click-outside", {
  priority: 700,
  bind() {
    let self = this;
    this.event = function(event) {
      self.vm.$emit(self.expression, event);
    };
    this.el.addEventListener("click", this.stopProp);
    document.body.addEventListener("click", this.event);
  },

  unbind() {
    this.el.removeEventListener("click", this.stopProp);
    document.body.removeEventListener("click", this.event);
  },
  stopProp(event) {
    event.stopPropagation();
  }
});

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
