<template>
  <div id="app">
    <home></home>
    <transition name="fade" mode="out-in">
    <router-view/>
    </transition>

  </div>
</template>

<script>
import home from './components/home'
export default {
  name: 'App',
  components: { home }
  // created () {
  //   // this.$store.dispatch('initstock')
  // }
}
</script>
<style>
.fade-enter-active{
   animation: slide-in 200ms ease-out forwards;
}
.sfade-leave-active{
   animation: slide-out 200ms ease-out forwards;
}
@keyframes slide-in {
  from{
   transform: translateY(-30px);
   opacity: 0;
  }
  to{
   transform: translateY(0);
   opacity: 1;
  }
}
@keyframes slide-out {
  from{
   transform: translateY(0);
   opacity: 1;
  }
  to{
   transform: translateY(-30px);
   opacity: 0;
  }
}
</style>
