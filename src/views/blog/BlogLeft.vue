<template>
  <div id="blog-left">
    <my-popup :isOpen="isOpen" :title="title" height="200px">
      <template v-slot:content>
        <add-catalog
          @close-pop="closePop"
          @new-item="newItem"
          :item="curItem"
        ></add-catalog>
      </template>
    </my-popup>
    <div class="item-operation">
      <div><span>分类</span></div>
      <div class="catalog-icon">
        <img
          src="../../assets/icon/blog/xinzengtongji.svg"
          alt=""
          title="新增同级"
          @click="dialog(1)"
        />
        <img
          src="../../assets/icon/blog/xinzengziji.svg"
          alt=""
          title="新增子级"
          @click="dialog(0)"
        />
        <img
          src="../../assets/icon/blog/delete.svg"
          alt=""
          @click="deleteItem"
        />
      </div>
    </div>
    <div class="node-tree">
      <node-tree
        v-for="item in items"
        :key="item.catalogname"
        :item="item"
        @cur-item="$emit('cur-item', $event)"
      ></node-tree>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs, onMounted } from "vue";
import NodeTree from "../../components/nodetree/NodeTree.vue";
import AddCatalog from "../../views/blog/AddCatalog.vue";
import { inject } from "@vue/runtime-core";
import {
  getAllCatalogs,
  newCatalog,
  deleteCatalog,
} from "../../apis/blog/catalog";
export default {
  components: { NodeTree, AddCatalog },
  name: "BlogLeft",
  props: {
    curItem: Object,
  },
  setup(props, context) {
    // 通过函数调用弹窗
    const popup = inject("popup");

    const data = reactive({
      items: [],
      floderName: "",
      isOpen: false,
      title: "",
    });

    const getCatagorys = () => {
      getAllCatalogs()
        .then((valueData) => {
          data.items = valueData;
        })
        .catch((error) => {
          alert("get catalogs faild!", error);
        });
    };

    const dialog = function(flag) {
      flag === 0 ? (data.title = "新增子级") : (data.title = "新增同级");
      data.isOpen = true;
    };
    const closePop = function() {
      data.isOpen = false;
    };

    const newItem = function(newItemName) {
      var param = {};
      param.catalogname = newItemName;
      data.title === "新增子级"
        ? (param.catalogparentid = props.curItem.id)
        : (param.catalogparentid = props.curItem.parentId);
      newCatalog(param)
        .then(() => {
          popup({
            title: "成功",
            msg: "新增目录成功！",
          });
          getCatagorys();
          closePop();
        })
        .catch(() => {
          popup({
            title: "失败",
            msg: "新增目录失败！",
          });
          closePop();
        });
    };

    const deleteItem = function() {
      console.log("now i will delete the item");
      popup({
        title: "提示",
        msg: "删除该节点会导致该节点下的子节点也会被删除，是否确定删除？",
        isOpen: true,
        popType: "confirm",
      }).then(() => {
        console.log("props.curItem", props.curItem);
        let id = props.curItem.id;
        let param = { id: id };
        deleteCatalog(param)
          .then((result) => {
            popup({
              title: "成功",
              msg: "删除成功！",
            });
            getCatagorys();
          })
          .catch((error) => {
            popup({
              title: "失败",
              msg: "删除失败！" + error,
            });
          });
      });
    };

    onMounted(() => {
      getCatagorys();
    });

    return {
      ...toRefs(data),
      dialog,
      closePop,
      newItem,
      getCatagorys,
      deleteItem,
    };
  },
};
</script>
<style>
.node-tree {
  padding-left: 20px;
}

.item-operation {
  padding: 10px 20px;
  /* color: #377de6; */
  display: flex;
  justify-content: space-between;
}

.catalog-icon {
  display: inline-flex;
}

.catalog-icon img:hover {
  -webkit-filter: drop-shadow(0px 0px 0px #213953);
}

.catalog-icon img{
  height: 1.3rem;
  width: 100%;
}
</style>
