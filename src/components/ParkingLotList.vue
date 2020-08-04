<template>
    <div>
        Student ID is: {{ $route.params.id }}
    </div>
</template>
<script>
import userList from "../assets/dataParkingLot.json";

export default {
  name: "List",
  computed:{
    list(){
      return userList.users.map((item) => {
        let date=new Date(item["created_date"]);
        let created_date=date.getHours()+"시 "+date.getMinutes()+"분";
        item["created_date"] = created_date;
        return item;
      })
    },
  },

  mounted() {
    console.log('1234567890');
  }
}
</script>
