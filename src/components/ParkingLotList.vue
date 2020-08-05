<template>
    <div style="padding:10px 10px 5px 10px;text-align:left;">
      <ul v-for="(item,index) in list" :key="index" style="display:contents;">
         <li><b style="font-size:16px;">{{item.name}}</b></li>
         <li v-on:click="toggleLayerMap">주소: 서울시 종로구 {{item.address}}</li>
         <li>운영시간: {{item.time}}</li>
         <li>주차대수: {{item.lots}}대</li>
         <li>{{item.type}}운영, {{item.grade}}급지</li>
         <li style="height:10px;"></li>
      </ul>
    </div>
</template>
<script>
import listParkingLot from "../assets/dataParkingLot.json";


/*
var kakaoMap;
var kakaoMarker;
var kakaoCustomOverlay;
var address='서울시 강동구 천호대로 1097 강동역';
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
    window.kakao && window.kakao.maps ? this.initKakaoMap() : this.loadKakaoMap();
  },
  methods: {
    initKakaoMap(){
      const script=document.createElement('script');
      script.onload=()=>kakao.maps.load(this.loadKakaoMap);
      script.src='https://dapi.kakao.com/v2/maps/sdk.js?appkey=8b281e74fafada4e73f73eed575ed52d';
      document.head.appendChild(script);
    },
    loadKakaoMap(){

      var container=document.getElementById('kakaoMap');
      var options={
        center:new kakao.maps.LatLng(33.450701,126.570667),
        level:3,
      }
      var map=new kakao.maps.Map(container,options);
      var marker=new kakao.maps.Marker({position:map.getCenter()});
      marker.setMap(map);

    },
    toggleLayerMap:function(){
      this.$parent.showLayerMap=!this.$parent.showLayerMap;
      console.log('rootData',this.$parent.showLayerMap);


        var container=document.getElementById('kakaoMap');
        var options={
          center:new kakao.maps.LatLng(33.450701,126.570667),
          level:3,
        }
        var map=new kakao.maps.Map(container,options);
        var marker=new kakao.maps.Marker({position:map.getCenter()});
        marker.setMap(map);


    }
  }
}

</script>
