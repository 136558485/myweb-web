<template>
    <div id="article-detail">
        <div class="back-list"><button @click="$emit('back-to')">返回</button></div>
        <div class="article-title">{{article.title}}</div>
        <div class="article-author">{{article.author}}</div>
        <div class="article-content" v-html="article.content"></div>
        <div class="article-date">{{article.createdate}}</div>
    </div>
</template>
<script>
export default {
    name: "ArticleDetail",
    props: {
        article: {
            type: Object,
            default: {}
        }
    }
}
</script>
<style>
.back-list {
    padding: 10px 0;
    border-bottom: 1px solid #f5f5f5;
}

#article-detail {
    background-color: #fff;
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