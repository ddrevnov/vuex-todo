import Todo from './components/Todo/index.vue'
import Home from './components/Home/index.vue'

export default function (router) {
  router.map({

    '/': {
      name: 'home',
      component: Home
    },

    '/todo': {
      name: 'todo',
      component: Todo
    },

  });
}