<template>
  <div id="new-article">
    <div class="article-info">
      <table>
        <tr>
          <td>标题：</td>
          <td><input type="text" v-model="title"/></td>
        </tr>
        <tr>
          <td>作者：</td>
          <td><input type="text" v-model="author"/></td>
        </tr>
        <tr>
          <td>摘要：</td>
          <td><input type="text" v-model="summary"/></td>
        </tr>
      </table>
    </div>
    <div class="article-op">
        <button @click="close">取消</button>
        <button @click="submit" style="margin-left:1rem;">提交</button>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs} from "vue"
export default {
    name: "NewArticle",
    setup(props,context) {
        const data = reactive({
            title: "",
            author: "",
            summary: ""
        })

        const close = () => {
            data.title = "";
            data.author = "";
            data.summary = "";
            context.emit("pop-close")
        }

        const submit = () => {
            const param = {};
            param.title = data.title;
            param.author = data.author;
            param.summary = data.summary;
            context.emit("new-submit", param)
        }

        return {
            ...toRefs(data),
            close,
            submit
        }
    }
}
</script>
<style>
.article-op {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
}
</style>