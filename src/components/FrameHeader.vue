<template>
  <div class="frameHeader" style="background-color:#ffbb00">
  <img alt="Vue logo" src="../assets/logo.png" style="width:50px;position:absolute;left:5px;top:5px;">
  <div class="test">vue.kaudo.com</div>
  <div class="test">vue.js example site</div>
  <div class="test">https://github.com/kaudo/vue.js</div>

    <input name="keyword"/>
    <button id="btnSearch">검색</button>
  </div>
</template>

<script>
export default {
  name: 'FrameHeader',
  props: {
    msg: String
  },

  created(){
  /*
    $('#btn').click(function(){
      alert('click on created');
    });
  */
  },

  mounted(){
  /*
    $('#btn').click(function(){
      alert('click on mounted');
    });
  */
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.indexVue{
background-color:#fffaee;
}
</style>
