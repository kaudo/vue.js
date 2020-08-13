<template>
  <div class="frameFooter" style="background-color:#888;color:#eee">
    <div class="footer" style="font:normal bold 14px / 26px -webkit-control;">2020/08 vue.kaudo.com kaudo@msn.com</div>

<div v-if="this.$parent.showLayerMap" class="layerMap" style="position:fixed;left:0;top:0;width:100%;height:100%;z-index:700;background-color:#000;">
  <button class="btnClose btnCloseMap" v-on:click="toggleLayerMap">닫기</button>
  <div id="kakaoMap" style="width:100%;height:100%;"></div>
</div>

<div v-if="this.$parent.showLayerView" class="layerView" style="position:fixed;left:0;top:0;width:100%;height:100%;z-index:700;background-color:#000;">
  <button class="btnClose btnCloseView" v-on:click="toggleLayerView">닫기</button>
  <img id="imgView" v-bind:src="require('../assets/view/view_'+this.$parent.indexView+'.jpg')" style="width:100%;"/>
</div>

  </div>
</template>
<style>
button.btnClose{z-index:710;position:absolute;width:35px;height:35px;background:url('../assets/icon_close.png') no-repeat 0 0 / cover;letter-spacing:-10px;border:0;color:transparent;right:5px;top:5px;}
</style>
<script>
export default {
  name: 'FrameFooter',
  data: function () {
    return {

    }
  },
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
    },
    toggleLayerView:function(){
      this.$parent.showLayerView=!this.$parent.showLayerView;
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
