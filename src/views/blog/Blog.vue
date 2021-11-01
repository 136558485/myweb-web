<template>
  <div id="Blog">
    <div class="left-content">
      <blog-left
        @cur-item="selectItem"
        :curItem="curItem"
      ></blog-left>
    </div>
    <div class="right-content">
      <blog-right :catalog="curItem"></blog-right>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs } from "vue";
import BlogLeft from "./BlogLeft.vue";
import BlogRight from "./BlogRight.vue";
export default {
  components: { BlogLeft, BlogRight },
  setup() {
    const dataMap = reactive({
      curItem: {},
    });
    const selectItem = (item) => {
      dataMap.curItem = item;
    };
    return { ...toRefs(dataMap), selectItem };
  },
};
</script>
<style>
#Blog {
  display: flex;
  height: 99%;
}
.left-content {
  background-color: #f2f2f2;
  width: 18%;
  height: 100%;
  overflow: auto;
  border-right: 2px solid #8a8383;
}
.right-content {
  background-color: #f2f2f2;
  width: 82%;
  height: 100%;
}
</style>