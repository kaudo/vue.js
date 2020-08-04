<template>
    <div>
        Student ID is: {{ $route.params.id }}
    </div>
</template>
<script>
import userList from "../assets/dataParkingLot.json";

export default {
  name: "UserList",
  computed:{
    users(){
      return userList.users.map((items) => {
        let c=new Date(items["created_date"]);
        let created_date=c.getHours()+"시 "+c.getMinutes()+"분";
        items["created_date"] = created_date;
        return items;
      })
    },
  },

  mounted() {
    console.log('parkingLotDetail');
  }
}
</script>
