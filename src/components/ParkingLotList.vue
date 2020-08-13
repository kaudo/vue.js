<template>
  <div style="padding:10px 10px 5px 10px;text-align:left;">
    <ul v-for="(item,index) in list" :key="index" style="display:contents;">
      <button class="btnMap" v-on:click="toggleLayerMap">주소: 서울시 종로구 {{item.address}}</button>
      <button class="btnView" v-on:click="toggleLayerView" :tag="item.seq">전경 보기</button>
      <li><b style="font-size:16px;">{{item.name}}</b></li>
      <li v-on:click="toggleLayerMap" class="btnAddress btnMap">주소: 서울시 종로구 {{item.address}}</li>
      <li>운영시간: {{item.time}}</li>
      <li>주차대수: {{item.lots}}대</li>
      <li>{{item.type}}운영, {{item.grade}}급지</li>
      <li style="height:10px;"></li>
    </ul>
  </div>
</template>
<style>
button.btnView{background:url('../assets/icon_view.png') no-repeat 0px 0px / contain;float:right;margin:0px;padding:0;border:0;color:transparent
;letter-spacing:-10px;width:40px;height:40px;vertical-align:super;vertical-align:middle;}
button.btnMap{background:url('../assets/icon_map.png') no-repeat 0px 0px / contain;float:right;padding:0;border:0;color:transparent
;letter-spacing:-10px;width:40px;height:40px;vertical-align:super;vertical-align:middle;margin:0 0 0 10px;}
</style>
<script>
import listParkingLot from "../assets/dataParkingLot.json";

//var kakao={maps:null};
/*
var kakaoMap;
var kakaoMarker;
var kakaoCustomOverlay;
var address='서울시 강동구 천호대로 1097 강동역';

var model = {
  message : 'v-bind 디렉티브',
  imagePath :"https://s.pstatic.net/static/www/img/uit/2019/img_banner_ie11.png"
}
*/

export default {
  name:'ParkingLotList',
  data:function(){
    return {
        childData: 20
    }
  },
  computed:{
    list(){
      return listParkingLot.list.map((item) => {
        //let date=new Date(item["created_date"]);
        //let created_date=date.getHours()+"시 "+date.getMinutes()+"분";
        //item["created_date"] = created_date;
        item["test"]=item["no"];
        return item;
      })
    },
  },

  mounted(){
    //window.kakao && window.kakao.maps ? this.initKakaoMap() : this.loadKakaoMap();
    //this.initKakaoMap()
  },
  methods: {

    loadKakaoMap(){
/*
      var container=document.getElementById('kakaoMap');
      var options={
        center:new kakao.maps.LatLng(33.450701,126.570667),
        level:3,
      }
      var map=new kakao.maps.Map(container,options);
      var marker=new kakao.maps.Marker({position:map.getCenter()});
      marker.setMap(map);
*/
    },
    initKakaoMap(){
      const script=document.createElement('script');
      //script.onload=()=>kakao.maps.load(this.loadKakaoMap);
      script.src='https://dapi.kakao.com/v2/maps/sdk.js?appkey=cbd6e39a77c09937734b818c2974da8d&autoload=false';
      document.head.appendChild(script);
    },
    toggleLayerMap:function(){
      this.$parent.showLayerMap=!this.$parent.showLayerMap;
      console.log('rootData',this.$parent.showLayerMap);
/*
      if(this.$parent.showLayerMap){
        var container=document.getElementById('mapKakao');
        var options={
          center:new kakao.maps.LatLng(33.450701,126.570667),
          level:3,
        }
        var map=new kakao.maps.Map(container,options);
        var marker=new kakao.maps.Marker({position:map.getCenter()});
        marker.setMap(map);
      }
*/
    },
    toggleLayerView:function(){
      this.$parent.indexView=event.target.getAttribute('tag');
      this.$parent.showLayerView=!this.$parent.showLayerView;
      //alert(event.target.innerText);
      //alert(event.target.getAttribute('tag'));

    }
  }
}

</script>
