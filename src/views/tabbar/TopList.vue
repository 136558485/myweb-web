<template>
  <div id="top-list">
    <div class="home" @click="clickItem('/home')"><a :class="{tabbaractive: isActive('/home')}">{{$t('message.home')}}</a></div>
    <div class="items">
      <ul>
        <!-- <li @click="clickItem('/intro')"><a>简历</a></li>
        <li @click="clickItem('/mind')"><a>思维导图</a></li> -->
        <li @click="clickItem('/blog')"><a :class="{tabbaractive: isActive('/blog')}">{{$t('message.blog')}}</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "TopList",
  methods: {
    clickItem(path) {
      this.$router.push(path);
    },
    isActive(path) {
      return this.$route.path.indexOf(path) != -1;
    }
  },
};
</script>

<style>
#top-list {
  height: 49px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 30px;
  background-color: #333;
  color: rgb(252, 252, 252);
}

#top-list a:hover{
  color: rgb(223, 223, 222);
  border-bottom: 3px solid #42b983;
}

.home {
  width: 100px;
}

.items {
  display: flex;
  justify-content: flex-end;
  text-align: center;
  width: 90%;
}
.items ul {
  list-style: none;
  margin: 0;
  display: flex;
}

.items ul li {
  width: 100px;
}

.tabbaractive {
  color: rgb(223, 223, 222);
  border-bottom: 3px solid #42b983;
}
</style>