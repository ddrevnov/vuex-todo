import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import configRouter from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  history: true,
  saveScrollPosition: true,
  suppressTransitionError: true
});

configRouter(router);

router.start(Vue.extend(App), '#root');
window.router = router;

new Vue({
  el: 'body',
  components: { App }
})
