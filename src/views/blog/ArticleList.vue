<template>
  <div id="article-list">
    <div class="article" v-for="item in articles" :key="item.id" :item="item">
      <div class="art-title">
        <a @click="$emit('to-articledetail', item)" class="title-text">{{ item.title }}</a>
        <div>
          <a @click="$emit('edit-article', item)">编辑</a>
          <a @click="deleteArticle(item.id)" style="margin-left: 10px">删除</a>
        </div>
      </div>
      <div class="art-summary">
        <span>{{ item.summary }}</span>
      </div>
      <div class="art-info">
        <span class="art-author">{{ item.author }}</span>
        <span class="art-createdate" style="margin-left: 10px">{{ item.createdate }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs, onMounted } from "vue";
export default {
  name: "ArticleList",
  props: {
    articles: Array,
  },
  setup(props, context) {
    const data = reactive({});

    const deleteArticle = id => {
      let param = { id: id };
      context.emit("delete-article", param);
    };

    onMounted(() => {});

    return {
      ...toRefs(data),
      deleteArticle,
    };
  },
};
</script>
<style>
#article-list {
  padding: 0.5rem 1.5rem;
}

.article {
  padding: 1.5rem 1.5rem;
  border: 1px solid #fff;
  border-radius: 5px;
  background-color: #f8f8f8;
  margin: 2rem 0;
  -webkit-box-shadow: 0 1px 3px #ddd
  /* box-shadow: 0px 4px 10px #dfdfdf; */
}

.art-title {
  color: #005da6;
  display: flex;
  justify-content: space-between;
}

.art-title a:hover {
  background-color: #005da6;
  color: #fff;
}

.title-text {
  font-weight: 550;
}

.article:hover {
  box-shadow: 0px 4px 10px #494848;
}
</style>