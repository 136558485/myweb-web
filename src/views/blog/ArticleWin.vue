<template>
    <div id="article-win">
        <div class="article-title">{{article.title}}</div>
        <div class="article-author">{{article.author}}</div>
        <div class="article-content" v-html="article.content"></div>
        <div class="article-date">{{article.createdate}}</div>
    </div>
</template>
<script>
import { getArticleDetailById } from "../../apis/blog/article"
import { reactive, toRefs, onMounted, inject } from "vue";
import { useRoute } from "vue-router"
export default {
    name: "ArticleWin",
    setup() {
        const data = reactive({
            article: {},
        })

        const route =useRoute();
        const popup = inject("popup")

        onMounted(() => {
            let articleid = route.query.articleid;
            getArticleDetailById(articleid).then(result => {
                data.article = result[0];
            }).catch(error => {
                popup({
                    title: "失败",
                    msg: "获取文章详情失败！" + error
                })
            })
        })

        return {
            ...toRefs(data),
        }
    }
}
</script>
<style>
.back-list {
    padding: 10px 0;
    border-bottom: 1px solid #f5f5f5;
}
.article-title {
    text-align: center;
    color: #005da6;
}
.article-author {
    text-align: center;
    color: #005da6;
}
.article-date {
    text-align: end;
    color: #a5a5a5;
}
</style>