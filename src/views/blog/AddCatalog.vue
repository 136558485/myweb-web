<template>
  <div id="addCatalog">
    <div class="addcatalog-input">
      <table>
        <!-- <tr v-if="catalogParentName">
          <td><span>父目录名称：</span></td>
          <td><input type="text" v-model="catalogParentName" readonly /></td>
        </tr> -->
        <tr>
          <td><span>新增目录名称：</span></td>
          <td><input type="text" v-model="newCatalogName" /></td>
        </tr>
      </table>
    </div>
    <div class="addcatalog-buttondiv">
      <button @click="close">取消</button><button @click="newItem" style="margin-left:1rem;">提交</button>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs, onMounted, onUpdated } from "vue";
export default {
  name: "AddCatalog",
  props: {
    item: {
      type: Object,
      default: {},
    },
  },
  setup(props, context) {
    const data = reactive({
      newCatalogName: "",
      catalogParentName: String,
    });

    const close = () => {
      context.emit("close-pop");
    };

    const newItem = () => {
      let name = data.newCatalogName;
      context.emit("new-item", name);
      data.newCatalogName = "";
    };

    onUpdated(() => {
      data.catalogParentName = props.item.parentName;
    });

    return {
      ...toRefs(data),
      close,
      newItem,
    };
  },
};
</script>
<style>
.addcatalog-buttondiv {
  display: flex;
  justify-content: flex-end;
}

.addcatalog-input {
  padding: 30px 0;
}
</style>