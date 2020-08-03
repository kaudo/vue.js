import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import Student from './components/Student.vue';
import Redirect from './components/Redirect.vue';
import Error from './components/404.vue';
import ParkingLotList from './components/ParkingLotList.vue';
import ParkingLotDetail from './components/ParkingLotDetail.vue';

const routes=[
  {path:'/',component:Home,name:'home'},
  {path:'/register',component:Register,name:'register'},
  {path:'/login',component:Login,name:'login'},
  {path:'/student/:id',component:Student,name:'student'},
  {path:'/redirect',component:Redirect,name:'redirect'},
  {path:'/404',component:Error,name:'404'},

  {path:'/parkingLotList',component:ParkingLotList,name:'parkingLotList'},
  {path:'/parkingLotDetail',component:ParkingLotDetail,name:'parkingLotDetail'},
];

export default routes;
