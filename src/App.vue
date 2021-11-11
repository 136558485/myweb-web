<template>
  <div>
    <tab-bar>
      <top-list></top-list>
    </tab-bar>
    <div id="content">
      <div class="blank-space"></div>
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
@import "./assets/css/base.css";
#content {
  /* background-color: azure; */
  /* margin-top: 50px; */
  height: calc(93vh);
}
.blank-space {
  width: 100%;
  height: 8%;
}
</style>
