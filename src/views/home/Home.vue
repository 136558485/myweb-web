<template>
  <div id="home">
    <div id="page-up">
      <img src="../../assets/index.png" alt="" />
    </div>
    <div id="page-down">
      <div class="div-1">
        <home-article></home-article>
      </div>
      <div class="div-2">
        <home-myinfo></home-myinfo>
      </div>
    </div>
  </div>
</template>
<script>
import HomeArticle from "./HomeArticle.vue";
import HomeMyinfo from "./HomeMyinfo.vue"
import { reactive, ref, toRefs, onMounted } from "vue";
export default {
  name: "Home",
  components: { HomeArticle, HomeMyinfo },
  setup() {
    const articles = ref();

    const box = ref(null);

    onMounted(() => {
    });

    return {
      articles,
      box
    };
  },
};
</script>
<style>
#home {
  height: 99%;
  width: 100%;
  display: flex;
  background-color: #f2f2f2;
  flex-direction: column;
  align-items: center;
}
#page-up {
  height: 33%;
  width: 99%;
  margin-top: 10px;
  border: 1px solid #fff;
  -webkit-box-shadow: 0 1px 3px #ddd;
}
#page-down {
  height: 60%;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  overflow: auto;
}

#page-up img {
  height: 100%;
  width: 100%;
}

.div-1 {
  height: 80%;
  width: 50%;
  background-color: #f8f8fa;
  margin: 10px 10px;
  border: 1px solid #fff;
  -webkit-box-shadow: 0 1px 3px #ddd;
}

.div-2 {
  height: 60%;
  width: 30%;
  margin: 10px 10px;
  background-color: #f8f8fa;
  border: 1px solid #fff;
  -webkit-box-shadow: 0 1px 3px #ddd;
}
</style>