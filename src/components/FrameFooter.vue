<template>
  <div class="frameFooter" style="background-color:#888;color:#eee">
    <div class="footer" style="font:normal bold 14px / 26px -webkit-control;">2020/08 vue.kaudo.com kaudo@msn.com</div>

<div v-if="this.$parent.showLayerMap" class="layerMap" style="position:fixed;left:0;top:0;width:100%;height:100%;z-index:700;background-color:#000;">
<div id="kakaoMap" style="width:100%;height:100%;" v-on:click="toggleLayerMap"></div>
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
  },
  methods: {
    toggleLayerMap:function(){
      this.$parent.showLayerMap=!this.$parent.showLayerMap;
      console.log('rootData',this.$parent.showLayerMap);
    }
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
