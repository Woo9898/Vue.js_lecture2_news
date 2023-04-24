<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">  
      <router-view></router-view>
    </transition>
    <Spinner :loading="loadingstatus"></Spinner>

  </div>
</template>

<script>
import Spinner from './components/Spinner.vue'
import ToolBar from './components/ToolBar.vue'
import bus from './utils/bus.js'
export default {
  components: {
    ToolBar,
    Spinner
  },
  data(){
    return{
      loadingstatus: false
    }
  },
  methods:{
    startSpinner(){
      this.loadingstatus = true;
    },
    endSpinner(){
      this.loadingstatus = false;
    }
  },
  created(){
    bus.$on('start:spinner', this.startSpinner )
    bus.$on('end:spinner', this.endSpinner)
  },
  beforeDestroy(){
    bus.$off('start:spinner', this.startSpinner)
    bus.$off('end:spinner', this.endSpinner)
  }
}

</script>

<style>
a{
  color: #34495e;
  text-decoration: none;
}
body {
  padding: 0;
  margin: 0;
}
a.router-link-exact-active{
  text-decoration:underline;
}
a:hover{
  color: #42b883;
}



/*router-transition*/ 
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>