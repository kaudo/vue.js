<template>
  <div class="indexVue">
    <h1>msg {{ msg }}</h1>
    <button id="btn">index.vue 클릭이벤트</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
