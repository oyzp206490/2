<template>
  <div class="hello">
    <!-- <home :msg='msg'></home> -->
    <h1>总额为：{{del}}</h1>
  </div>
</template>

<script>
// import home from './home'
export default {
  // components: { home },
  name: 'HelloWorld',
  computed: {
    del () {
      return this.$store.getters.fund
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
