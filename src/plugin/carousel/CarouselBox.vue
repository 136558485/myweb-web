<template>
  <div class="carousel-box">
    <ul>
      <li
        class="carousel-item"
        v-for="(item, i) in articleList"
        :key="item.id"
        :class="{ fade: index === i }"
        @mouseenter="stop"
        @mouseleave="start">
        <!-- <div>{{ item.title }}</div>
        <img :src="item.imgsrc" /> -->
        <div class="art-carousel">
          <div class="art-title">
            <a @click="toArticleWin(item)" class="title-text">{{ item.title }}</a>
          </div>
          <div class="art-summary">
            <span>{{ item.summary }}</span>
          </div>
          <div class="art-info">
            <span class="art-author">{{ item.author }}</span>
            <span class="art-createdate" style="margin-left: 10px">{{ item.createdate }}</span>
          </div>
          </div>
      </li>
    </ul>
    <a @click="toggle(-1)" class="carousel-btn pre">&#139</a>
    <a @click="toggle(1)" class="carousel-btn next">&#155</a>
    <div class="carousel-indicator">
      <span v-for="i in articleList.length" :key="i" :class="{active: index === i-1}" @click="toThisItem(i-1)"></span>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs, watch } from "vue";
import { useRouter } from "vue-router"
export default {
  name: "CarouselBox",
  props: {
    articleList: Array,
  },
  setup(props) {
    const data = reactive({
      index: 0,
    });

    const router = useRouter();

    const toArticleWin = item => {
      const href  = router.resolve({
        name: "Article",
        path: "/article",
        query: {articleid: item.id}
      });      
      window.open(href.href, '_blank')

    }

    const toggle = (opFlag) => {
      if (opFlag === -1 && data.index > 0) {
        data.index--;
      }
      if (opFlag === 1 && data.index < props.articleList.length - 1) {
        data.index++;
      }
    };

    const stop = () => {
      clearInterval(timer);
    };

    const start = () => {
      autoplayFn();
    };

    const autoplayFn = () => {
      clearInterval(timer);
      timer = setInterval(() => {
        data.index++;
        if (data.index >= props.articleList.length) {
          data.index = 0;
        }
      }, 3000);
    };

    const toThisItem = (curIndex) => {
      data.index = curIndex;
    };

    let timer = null;
    watch(
      () => props.articleList,
      () => {
        // 这里注意一下，如果监听reactive中的属性，不能直接写监听对象 要以函数返回值的方式监听
        autoplayFn();
      },
      {
        // 页面加载会先执行一次
        immediate: true,
      }
    );

    return {
      ...toRefs(data),
      toggle,
      stop,
      start,
      toThisItem,
      toArticleWin
    };
  },
};
</script>
<style>
.carousel-box {
  height: 100%;
  width: 100%;
  background-color: #f9f9f9;
  position: relative;
}

.carousel-box ul {
  list-style: none;
}

.carousel-box li {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  transition: opacity 0.5s linear;
}

/* .carousel-item img {
  width: 100%;
  height: 100%;
}

.carousel-item div {
  position: absolute;
  top: 0;
  bottom: 0;
  color: #f9f9f9;
} */

.carousel-box .fade {
  opacity: 1;
  z-index: 1;
}

.carousel-btn {
  width: 44px;
  height: 44px;
  background-color: rgba(0, 0, 0, 0.2);
  color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  z-index: 2;
  text-align: center;
  line-height: 44px;
  opacity: 0.5;
  transition: all 0.5s;
}

.prev {
  left: 20px;
}

.next {
  right: 0;
}

.carousel-btn:hover {
  opacity: 1;
}

.carousel-indicator {
  position: absolute;
  bottom: 20px;
  text-align: center;
  width: 100%;
  z-index: 2;
}

.carousel-indicator span {
  display: inline-block;
  width: 12px;
  height: 12px;
  background-color: black;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 12px;
}

.carousel-indicator .active {
  background-color: blanchedalmond;
}

.art-carousel {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.art-title {
  height: 20%;
}

.art-summary {
  height: 20%;
}

.art-info {
  height: 20%;
  display: flex;
  justify-content: flex-end;
}
</style>