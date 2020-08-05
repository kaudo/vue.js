<template>
  <div class="frameFooter" style="background-color:#888;color:#eee">
    <div class="footer" style="font:normal bold 14px / 26px -webkit-control;">2020/08 vue.kaudo.com kaudo@msn.com</div>

    <div class="layerMap" style="display:none;border:1px orange solid;">
      레이어 맵
    </div>

  </div>
</template>

<script>
export default {
  name: 'FrameFooter',
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
