<template>
  <div id="home-article">
    <div class="carousel-head"><span>最近五篇</span><span><a @click="toBlog">更多...</a></span></div>
    <div class="carousel-box-div"><carousel-box :articleList="articleList"></carousel-box></div>
    
  </div>
</template>
<script>
import { reactive, toRefs, ref, onMounted, getCurrentInstance } from "vue";
import { useRouter } from "vue-router"
import { getArticleByCatalogId } from "../../apis/blog/article";
import CarouselBox from "../../plugin/carousel/CarouselBox.vue";
export default {
  name: "HomeUp",
  components: { CarouselBox },
  setup(props, context) {
    const data = reactive({
      articleList: [],
    });
    const getArticles = () => {
      const param = {};
      param.limit = 5;
      param.offset = 0;
      getArticleByCatalogId(param)
        .then((values) => {
          data.articleList = values;
        })
        .catch((error) => {
          alert(error);
        });
    };
    const router = useRouter();
    const toBlog = () => {    
      console.log("router:", router);
      router.push("/blog");
    }
    onMounted(() => {
      getArticles();
    });
    return {
      ...toRefs(data),
      toBlog
    };
  },
};
</script>
<style>
#home-article {
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #f5f5f5;
}
.carousel-head {
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #8a8383;
    height: 15%;
}

.carousel-box-div {
    height: 80%;
}
</style>
