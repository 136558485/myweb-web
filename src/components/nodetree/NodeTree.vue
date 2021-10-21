<template>
  <div class="tree">
    <li>
      <input type="radio" name="treenode" class="treenode"/>
      <label class="item-name" @click="selectItem($event)">{{ item.catalogname }}</label>
      <span v-show="isFloder" @click="toggle">{{
        isopen ? "[-]" : "[+]"
      }}</span>
      <ul v-if="isopen">
        <node-tree
          v-for="sub in item.child"
          :key="sub.catalogname"
          :item="sub"
          @cur-item="$emit('cur-item', $event)"
        ></node-tree>
      </ul>
    </li>
  </div>
</template>
<script>
export default {
  name: "NodeTree",
  data() {
    return {
      isNew: false,
      isopen: false,
    };
  },
  methods: {
    toggle: function () {
      this.isopen = !this.isopen;
    },
    selectItem: function (event) {
      // 触发单选框的选择事件
      let radionode = event.currentTarget.previousSibling;
      radionode.checked = true
      
      var item = {};
      item.id = this.item.catalogid;
      item.name = this.item.catalogname;
      item.parentId = this.item.catalogparentid;
      item.parentName = this.item.catalogparentname;
      this.$emit("cur-item", item);
    },
  },
  computed: {
    isFloder: function () {
      return this.item.child && this.item.child.length > 0;
    },
  },
  props: {
    item: Object,
    rootNode: Boolean,
  },
};
</script>
<style>
.tree ul {
  list-style: none;
  overflow: hidden;
  margin-top: 5px;
  margin-bottom: 5px;
}

.tree li {
  list-style: none;
  overflow: hidden;
}

input[type="radio"] {
  display: none;
}

input[type="radio"]:checked ~ .item-name {
  background-color: beige;
}
</style>