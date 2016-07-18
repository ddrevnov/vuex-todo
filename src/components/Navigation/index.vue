<template>
  <nav>
    <a v-link="{ path: '/' }">Home</a>
    <a v-link="{ path: '/todo' }">Todo</a>
  </nav>
</template>

<script>
  import { UiButton } from 'keen-ui'
  export default {
    data() {
      return {

      }
  },

    components: {
      UiButton
    }
  }
</script>