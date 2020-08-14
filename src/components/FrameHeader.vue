<template>
  <div class="frameHeader" style="background-color:#fff;padding-top:40px;">
  <img alt="Vue logo" src="../assets/logo.png" style="width: 30px;position: absolute;left: 5px;top: 2px;">
  <div class="domain">vue.kaudo.com</div>
  <div class="msg" style="text-align:left;padding:0px 10px 5px 10px;font:normal normal 14px / 18px -webkit-control;">안녕하세요. 이 사이트는 vue.js샘플 프로젝트 입니다.<br/>
  <a href="https://github.com/kaudo/vue.js" target="_blank">github.com/kaudo/vue.js</a>에 소스코드가 공개되어 있습니다.<br/>
  <a href="https://netlify.com" target="_blank">netlify.com</a> 자동 빌드 배포방식으 서비스되고 있습니다.<br/>
  <br/>
  <b>2019년도 종로구 공영주차장 현황 (2018년11월28일자료)</b><br/>
  </div>

<div style="display:none">
    <input name="keyword"/>
    <button id="btnSearch">검색</button>
</div>
  </div>
</template>
<style>
.domain{position:absolute;left:40px;top:3px;font:normal bold 24px / 26px arial;font-family:arial,'나눔 고딕',Dotum,'droid sans fallback','AppleGothic',sans-serif;
}

</style>
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
