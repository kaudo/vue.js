<template>
  <div class="frameHeader" style="background-color:#fff">
  <img alt="Vue logo" src="../assets/logo.png" style="width:50px;position:absolute;left:5px;top:5px;">
  <div class="test">vue.kaudo.com</div>
  <div class="test">이 사이트는 vue.js샘플 프로젝트 입니다.<br/>
  2019년도 종로구 공영주차장 정보를 확인할 수 있습니다.<br/>
  github.com/kaudo/vue.js에 소스코드가 공개되어 있습니다.<br/>
  netlify에서 서비스되고 있습니다.<br/>
  </div>

<div style="display:none">
    <input name="keyword"/>
    <button id="btnSearch">검색</button>
</div>
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
