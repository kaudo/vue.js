<template>
    <div style="padding:10px 10px 5px 10px;text-align:left;">
      <ul v-for="(item,index) in list" :key="index" style="display:contents;">
         <li><b style="font-size:16px;">{{item.name}}</b></li>
         <li>주소: 서울시 종로구 {{item.address}}</li>
         <li>운영시간: {{item.time}}</li>
         <li>주차대수: {{item.lots}}대</li>
         <li>{{item.type}}운영, {{item.grade}}급지</li>
         <li style="height:10px;"></li>
      </ul>
    </div>
</template>
<script>
import listParkingLot from "../assets/dataParkingLot.json";

export default {
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

  mounted() {
    console.log('1234567890');
  }
}
</script>
