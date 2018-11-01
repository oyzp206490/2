<template>
  <div class="top">
    <!-- <div class="line"></div> -->
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1">Stock Trader</el-menu-item>
      <el-menu-item index="2">Portfollo</el-menu-item>
      <el-menu-item index="3">Stocks</el-menu-item>
      <!-- <el-menu-item index="4" style="float: right;">End Day</el-menu-item> -->
      <el-submenu index="5" style="float: right;">
        <template slot="title">Save & Load</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
      </el-submenu>
      <el-menu-item index="4" style="float: right;" @click="endday">End Day</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      // activeIndex: '1',
      activeIndex2: '1'
    }
  },
  created () {
    // if (this.$route.name === '')
    // console.log(this)
    if (this.$route.path === '/') {
      this.activeIndex2 = '1'
    } else if (this.$route.path === '/Portfollo') {
      this.activeIndex2 = '2'
    } else if (this.$route.path === '/pstock') {
      this.activeIndex2 = '3'
    }
  },
  methods: {
    ...mapActions(['randmizestocks']),
    handleSelect (key, keyPath) {
      if (key === '1') {
        this.$router.push('/')
      } else if (key === '2') {
        this.$router.push('/Portfollo')
      } else if (key === '3') {
        this.$router.push('/pstock')
      }
    },
    endday () {
      console.log(1)
      this.randmizestocks()
    }
  },
  watch: {
    '$route.path' (val) {
      if (val === '/') {
        this.activeIndex2 = '1'
      } else if (val === '/Portfollo') {
        this.activeIndex2 = '2'
      } else if (val === '/pstock') {
        this.activeIndex2 = '3'
      }
    }
  }
}
</script>
<style>
/* .top {
  margin-top: 20px;
} */
/* .rithg{
  float: right;
} */
</style>
