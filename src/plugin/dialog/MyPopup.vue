<template>
  <div v-show="isOpen" id="wapper">
    <div id="popup">
      <div class="popTitle">
        <span>{{ title }}</span>
      </div>
      <template v-if="$slots.content">
        <div class="temContent">
          <slot name="content"></slot>
        </div>
      </template>
      <template v-else>
        <div class="popContent">
          <span>{{ msg }}</span>
        </div>
        <div v-if="popType === 'tips'" class="popButton">
          <button @click="close">确认</button>
        </div>
        <div v-if="popType === 'confirm'" class="popButton">
          <button @click="close">取消</button
          ><button @click="confirmYes" style="margin-left:1rem;">确认</button>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs } from "vue";
export default {
  name: "MyPopup",
  props: {
    popType: {
      type: String,
      default: "tips",
    },
    title: {
      type: String,
      default: "这是弹窗标题",
    },
    msg: {
      type: String,
      default: "这是弹窗内容",
    },
    width: {
      type: String,
      default: "400px",
    },
    height: {
      type: String,
      default: "200px",
    },
    isOpen: {
      type: Boolean,
      default: true,
    },
    close: {
      type: Function,
      default: () => {
        $emit("close-pop");
      },
    },
  },
  setup(props) {
    const data = reactive({
      confirmFlag: null
    });

    const confirm = () => {
      return new Promise((resolve, reject) => {
        data.confirmFlag = {resolve, reject}
      })
    }
    const confirmYes = () => {
      data.confirmFlag.resolve();
      props.close();
    }
    return {
      ...toRefs(data),
      confirm,
      confirmYes
    };
  },
};
</script>
<style>
#wapper {
  width: 100%;
  height: 100%;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
}
#popup {
  width: v-bind(width);
  height: v-bind(height);
  background: #fff;
  z-index: 9999;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border-radius: 0.125rem;
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;
}
.popTitle {
  height: 30px;
  align-items: center;
  background-color: rgb(60, 195, 248);
  color: #fff;
  display: flex;
}
.popTitle span {
  margin-left: 10px;
}
.popContent {
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  word-break: break-word;
  padding: 0 10px;
}
.temContent {
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.popButton{
  display: flex;
  justify-content: flex-end;
  padding-right: 1.2rem;
}
</style>