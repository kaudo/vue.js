<template>
<div id="app">
  <img alt="Vue logo" src="./assets/logo.png" style="width:50px">
  <div class="test">vue.kaudo.com</div>
  <div class="test">vue.js example site</div>
  <div class="test">https://github.com/kaudo/vue.js</div>
  <nav style="background-color:#fffaee;">
    <ul>
      <li>
          <router-link :to="{name: 'home'}">Home</router-link>
      </li>
      <li>
          <router-link :to="{name: 'register'}">Register</router-link>
      </li>
      <li>
          <router-link :to="{name: 'login'}">Login</router-link>
      </li>
      <li>
          <router-link :to="{name: 'student', params: {id: 2}}">Student</router-link>
      </li>
    </ul>
    <!--
    <router-link to='/'>Home</router-link><br/>
    <router-link to='/register'>Register</router-link><br/>
    <router-link to='/login'>Login</router-link><br/>
    <router-link to='/student'>STUDENT</router-link><br/>
    -->
  </nav>
  <router-view />
  <Index msg="안녕하세요."/>
  <div style="display:none"><HelloWorld msg="Welcome to Your Vue.js App"/></div>

  <div class="footer">2020 vue.kaudo.com, https://github.com/kaudo/vue.js, kaudo@msn.com</div>
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
  },
  mounted() {
    //this.$router.push('/student/765');
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
