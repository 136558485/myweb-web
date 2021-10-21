<template>
  <div id="article-content">
    <div class="article-opration">
      <button @click="$emit('back-to')">返回</button
      ><button @click="$emit('save-content', content)" style="margin-left: 10px">保存</button>
    </div>
    <div class="article-editor">
      <my-tinymce @save-content="saveContent" :value="article.content"></my-tinymce>
    </div>
  </div>
</template>
<script>
import MyTinymce from "../../components/tinymce/MyTinymce.vue";
import { reactive, toRefs } from "vue"
export default {
  name: "ArticleContent",
  components: { MyTinymce },
  props: {
      article: {
          type: Object,
          default: {}
      }
  },
  setup() {
      const data = reactive({
          content: ""
      })

      const saveContent = value => {
          data.content = value;
      }

      return {
          ...toRefs(data),
          saveContent
      }
  }

};
</script>
<style>
#article-detail {
  padding: 1.5rem;
}

.article-opration {
  padding: 5px 0;
  border-bottom: 1px solid #f5f5f5;
}

.article-editor {
  padding: 5px 0;
}
</style>