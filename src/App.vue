<template>
<div id="app">
  <FrameHeader msg="Welcome to Your Vue.js App"/>

  <nav style="background-color:#fffaee;display:none;">
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
  <router-view/>
  <FrameFooter msg="안녕하세요."/>
</div>
</template>

<script>
import FrameFooter from './components/FrameFooter.vue'
import FrameHeader from './components/FrameHeader.vue'

export default {
  name: 'App',
  data: function () {
    return {
        showLayerMap:false
    }
  },
  components: {
    FrameHeader,
    FrameFooter,
  },
  mounted() {
    //this.$router.push('/student/765');

    //this.$router.push('/parkingLotList');
    //this.$router.push('/parkingLotList').catch(()=>{});
    if(this.$route.path!=='/parkingLotList') this.$router.push('/parkingLotList')
  }
}
</script>

<style>
body{margin:0;padding:0;font:normal normal 14px / 16px -webkit-control;}
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
