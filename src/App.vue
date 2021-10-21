<template>
  <div>
    <tab-bar>
      <top-list></top-list>
    </tab-bar>
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import TabBar from "./components/tabbar/TabBar.vue";
import TopList from "./views/tabbar/TopList.vue";
export default {
  components: {
    TabBar,
    TopList,
  },
};
</script>
<style>
body {
  padding: 0;
  margin: 0;
}
body button{
  background-color: rgb(60, 195, 248);
  color: #fff;
  border: 0;
  outline: none;
  font-size: 1.1rem;
  padding: 3px 10px;
}
body button:hover{
  background-color: rgb(118, 194, 245);
}

body ::-webkit-scrollbar{
  width: 10px;
  height: 10px;
  background-color:#f5f5f5;
}

body ::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(223 223 222);
  border-radius: 10px;
  background-color: #f5f5f5;
}

body ::-webkit-scrollbar-thumb{
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #dceffa;
}


#content {
  background-color: azure;
  margin-top: 50px;
  height: calc(93vh);
}
</style>
