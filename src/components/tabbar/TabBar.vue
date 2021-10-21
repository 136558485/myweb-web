<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>
<script>
  export default{
      name: "TabBar"
  }
</script>
<style>
  #tab-bar{
      height: 49px;
      display: flex;
      justify-content: center;

      position: fixed;
      left: 0;
      right: 0;
      top: 0;
  }
</style>
