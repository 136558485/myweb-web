<template>
  <div id="blog-right">
    <div v-if="curpage === 2">
      <article-detail
        :article="curArticle"
        @back-to="backToArtList"
      ></article-detail>
    </div>
    <div v-if="curpage === 1">
      <article-content
        @back-to="backToArtList"
        @save-content="saveContent"
        :article="curArticle"
      ></article-content>
    </div>
    <div v-if="curpage === 0" class="article-list-view">
      <my-popup :isOpen="isOpen" title="新增文章" height="250px">
        <template v-slot:content>
          <new-article @pop-close="closePop" @new-submit="submit"></new-article>
        </template>
      </my-popup>
      <div class="article-operation">
        <button @click="openNew">新增文章</button>
      </div>
      <div>
        <article-list
          @delete-article="deleteArt"
          @edit-article="editArticle"
          @to-articledetail="toArticle"
          @lock-article="lockArticle"
          @unlock-article="unLockArticle"
          :articles="articleList"
        ></article-list>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getArticleByCatalogId,
  newArticle,
  deleteArticle,
  updateArticleContent,
  getArticleDetailById,
  lockArticleApi,
  unLockArticleApi
} from "../../apis/blog/article";
import { reactive, toRefs, onMounted, watch, inject } from "vue";
import ArticleList from "./ArticleList.vue";
import AddCatalog from "./AddCatalog.vue";
import NewArticle from "./NewArticle.vue";
import ArticleContent from "./ArticleContent.vue";
import ArticleDetail from "./ArticleDetail.vue";
export default {
  name: "BlogRight",
  components: {
    ArticleList,
    AddCatalog,
    NewArticle,
    ArticleContent,
    ArticleDetail,
  },
  props: {
    catalog: Object,
  },
  setup(props) {
    // 通过函数调用弹窗
    const popup = inject("popup");

    const data = reactive({
      curpage: 0,
      articleList: [],
      index: 0,
      isOpen: false,
      curArticle: {},
    });

    const openNew = () => {
      data.isOpen = true;
    };

    const closePop = () => {
      console.log("进到close方法了");
      data.isOpen = false;
    };

    const submit = (param) => {
      param.catalogid = props.catalog.id;
      if(!param.catalogid) {
        popup({title: "提示", msg: "请在对应的分类下新增"});
        return;
      }
      newArticle(param)
        .then((value) => {
          getArticles();
          data.isOpen = false;
          popup({ title: "成功", msg: "新增文章成功" });
        })
        .catch((error) => {
          alert("新增失败！原因：", error);
        });
    };

    const deleteArt = (param) => {
      popup({
        title: "提示",
        msg: "确定要删除吗？",
        popType: "confirm",
      }).then(() => {
        deleteArticle(param)
          .then((value) => {
            if (value.code === 1) {
              popup({ title: "失败", msg: value.errmsg });
              return;
            }
            getArticles();
            popup({ title: "成功", msg: "删除成功" });
          })
          .catch((error) => {
            popup({ title: "失败", msg: "删除失败：" + error });
          });
      });
    };

    const saveContent = (value) => {
      console.log("value:", value);

      let param = {};
      param.content = value;
      param.id = data.curArticle.id;
      updateArticleContent(param)
        .then((result) => {
          if(result.code === 1) {
            popup({ title: "失败", msg: result.errmsg });
            return;
          }
          popup({ title: "成功", msg: "保存成功" });
          data.curArticle.content = value;
        })
        .catch((error) => {
          popup({ title: "失败", msg: "保存失败：" + error });
          data.curpage = 0;
        });
    };

    const editArticle = (item) => {
      getArticleContent(item).then((result) => {
        data.curpage = 1;
        data.curArticle = result;
      });
    };

    const toArticle = (item) => {
      getArticleContent(item).then((result) => {
        data.curpage = 2;
        data.curArticle = result;
      });
    };

    const getArticleContent = (item) => {
      return new Promise((resolve, reject) => {
        let articleid = item.id;
        getArticleDetailById(articleid)
          .then((result) => {
            if (result.length > 0) {
              resolve(result[0]);
            } else {
              reject("未获取到文章详情");
            }
          })
          .catch((error) => {
            reject("获取文章详情失败！error：", error);
          });
      });
    };

    const lockArticle = param => {
      lockArticleApi(param).then(result => {
        if(result.code === 1) {
          popup({ title: "失败", msg: result.errmsg });
          return;
        }
        popup({ title: "成功", msg: "操作成功" });
        getArticles();
      });
    }

    const unLockArticle = param => {
      unLockArticleApi(param).then(result => {
        if(result.code === 1) {
          popup({ title: "失败", msg: result.errmsg });
          return;
        }
        popup({ title: "成功", msg: "操作成功" });
        getArticles();
      });
    }

    const backToArtList = () => {
      data.curpage = 0;
      getArticles();
    };

    watch(
      () => props.catalog,
      () => {
        if (props.catalog) {
          getArticles();
        }
      }
    );

    const getArticles = () => {
      var catalogId = props.catalog.id;
      const param = {};
      if (catalogId) {
        param.catalogid = catalogId;
      }
      param.limit = 100;
      param.offset = 0;

      getArticleByCatalogId(param)
        .then((values) => {
          data.articleList = values;
        })
        .catch((error) => {
          alert(error);
        });
    };

    onMounted(() => {
      getArticles();
    });

    return {
      ...toRefs(data),
      openNew,
      closePop,
      submit,
      deleteArt,
      editArticle,
      backToArtList,
      saveContent,
      toArticle,
      unLockArticle,
      lockArticle
    };
  },
};
</script>
<style>
#blog-right {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.article-operation {
  padding: 0.5rem 1.5rem;
  border-bottom: 1px solid #f5f5f5;
}

.article-operation button {
  background-color: #005da6;
  color: #fff;
}
</style>
