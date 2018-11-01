<template>
  <div>
    <stock v-for='val in datatable' :key="val.id" :text='val'></stock>
  </div>
</template>
<script>
import stock from './Stocks'
export default {
  components: { stock },
  created () {
    this.$store.dispatch('initstock')
  },
  computed: {
    datatable () {
      return this.$store.getters.del
    }
  }
}
</script>
<style>

</style>
