<template>
    <div id="app">
    <nav>
        <router-link to='/'>Home</router-link>
        <router-link to='/register'>Register</router-link>
        <router-link to='/login'>Login</router-link>
    </nav>
    <router-view />

    <br/>----------------------------------<br/>

    vue.kaudo.com<br/>
    vue.js sample site<br/>

    <img alt="Vue logo" src="./assets/logo.png" style="width:50px">
    <Index msg="안녕하세요."/>

    <div style="display:none"><HelloWorld msg="Welcome to Your Vue.js App"/></div>
  </div>
</template>

<script>
import Index from './components/Index.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    Index,
    HelloWorld
  }
}
</script>

<style>
body{margin:0;padding:0;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top:0px;
  background-color:#eee;
}
</style>
