# vue.js

vue-cli 설치<br/>
npm install -g @vue/cli<br/>
<br/><br/>
vue-cli 제거<br/>
npm uninstall -g vue-cli<br/>
<br/><br/>
vue프로젝트 생성<br/>
vue create project<br/>
<br/><br/>
서버 시작<br/>
npm run serve<br/>
<img src=".etc/npm_run_serve.png?raw=true"/><br/>
<br/><br/>
로컬호스트 접속<br/>
http://localhost:8080<br/>
<img src=".etc/localhost8080.png?raw=true"/><br/>
<br/><br/>
vue 대시보드 실행<br/>
vue ui<br/>
<img src=".etc/vue_ui.png?raw=true"/><br/>
<br/><br/>
vue 대시보드 접속<br/>
http://localhost:8000/dashboard<br/>
<img src=".etc/project_dashboard.png?raw=true"/><br/>
<br/><br/>


<div tag="https://appdividend.com/2018/12/28/vue-router-tutorial-with-example-how-to-use-routing-in-vuejs/">vue.js router</div>

# vue router 설치
cd {프로젝트디렉토리}
npm install vue-router --save

# main.js import 아래에 추가
import VueRouter from 'vue-router'

# main.js "Vue.config.productionTip=false" 아래에 추가
Vue.use(VueRouter)


# src안에 routes.js 생성 (main.js와 같은위치)
const routes = [];
export default routes;

# main.js "import VueRouter from 'vue-router'" 아래에 추가
import routes from './routes';

# src/components 아래에  Home.vue 파일 생성
<template>
    <div>
        Home
    </div>
</template>
<script>
export default {

}
</script>


# src/components 아래에  Register.vue 파일 생성
<template>
    <div>
        Register
    </div>
</template>
<script>
export default {

}
</script>


# src/components 아래에  Login.vue 파일 생성
<template>
    <div>
        Login
    </div>
</template>
<script>
export default {

}
</script>
