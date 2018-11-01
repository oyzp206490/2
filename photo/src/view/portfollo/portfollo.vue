<template>
  <div>
   <stocs v-for="val in stocks" :key="val.id" :text='val'></stocs>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import stocs from './Stocks'
export default {
  computed: {
    ...mapGetters({
      stocks: 'datasur'
    })
  },
  components: {stocs}
}
</script>
<style>

</style>
