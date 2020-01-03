<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './components/common/Header'
import AppFooter from './components/common/Footer'
export default {
  name: 'App',
  components:{
  	AppHeader,
  	AppFooter
  },
	created(){
	}
}
</script>

<style>
html,body{
	margin: 0;
	padding: 0;
	height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
