<template>
  <div id="article-list">
    <my-popup :isOpen="isopen" :title="locktitle" height="140px">
      <template v-slot:content>
        <div class="lock-pop">
          <span>密码：</span><input type="text" v-model="lockpwd" />
          <button @click="subLock">确认</button>
        </div>
      </template>
    </my-popup>
    <div class="article" v-for="item in articles" :key="item.id" :item="item">
      <div class="art-title">
        <a @click="$emit('to-articledetail', item)" class="title-text">{{ item.title }}</a>
        <div class="op-icon">
          <img v-if="item.islock === 1" @click="lockPop(item)" src="../../assets/icon/blog/unlock.svg" alt="" title="锁定"/>
          <img v-else @click="lockPop(item)" src="../../assets/icon/blog/lock.svg" alt="" title="解锁"/>
          <img @click="$emit('edit-article', item)" src="../../assets/icon/blog/edit.svg" alt="" title="编辑"/>
          <img @click="deleteArticle(item.id)" src="../../assets/icon/blog/delete.svg" alt="" title="删除"/>
        </div>
      </div>
      <div class="art-summary">
        <span>{{ item.summary }}</span>
      </div>
      <div class="art-info">
        <span class="art-author">{{ item.author }}</span>
        <span class="art-createdate" style="margin-left: 10px">{{item.createdate}}</span>
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
    const data = reactive({
      curItem: {},
      isopen: false,
      locktitle: "",
      lockpwd: "",
    });

    const deleteArticle = (id) => {
      let param = { id: id };
      context.emit("delete-article", param);
    };

    const lockPop = item => {
      data.curItem = item;
      data.lockpwd = "";
      if(item.islock === 1) {
        data.locktitle = "解锁";
      } else {
        data.locktitle = "锁定";
      }
      
      data.isopen = true;
    };

    const subLock = () => {
      if(!data.lockpwd) {
        data.isopen = false;
        return;
      }
      let param = {};
      param.id = data.curItem.id;
      param.pwd = data.lockpwd;
      // 解锁
      if(data.curItem.islock === 1) {
        context.emit("unlock-article", param);
      } else {// 锁定
        context.emit("lock-article", param);
      }
      data.isopen = false;
    }

    onMounted(() => {});

    return {
      ...toRefs(data),
      deleteArticle,
      lockPop,
      subLock
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
  -webkit-box-shadow: 0 1px 3px #ddd;
}

.art-title {
  height: 25px;
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

.op-icon{
  height: 25px;
}

.op-icon img{
  height: 20px;
  width: 35px;
}

.op-icon img:hover{
  height: 25px;
  -webkit-filter: drop-shadow(0px 0px 0px #2B76B3);
}

.lock-pop {
  display: flex;
}

.lock-pop button{
  margin-left: 10px;
}
</style>
