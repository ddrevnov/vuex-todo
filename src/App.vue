<template>
  <div id="app">
    <navigation-vue></navigation-vue>
    <router-view></router-view>
  </div>
</template>

<script>
import NavigationVue from './components/Navigation/index.vue'
import TodoVue from './components/Todo/index.vue'

export default {
  components: {
    TodoVue,
    NavigationVue
  }
}
</script>

