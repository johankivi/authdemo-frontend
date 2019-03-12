<template>
  <div id="app">
    <p v-if="user">User logged in as <b>{{ user.name }}</b></p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  beforeMount(){
    
  },
  computed: {
    user(){
      return this.$store.state.activeUser.name;
    }
  }
}
</script>

<style lang="scss">
  @import 'scss/main';
</style>
