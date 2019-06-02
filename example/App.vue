<template>
  <vue-hover-mask @click="handleClick">
    <img
      src="http://t.cn/Ai9bzF6R"
      style="width: 200px;height: 200px;"
    >
    <template v-slot:action>
      <i class="iconfont zoom"></i>
      <i class="iconfont delete"></i>
    </template>
  </vue-hover-mask>
</template>

<script>
export default {
  name: 'App',
  methods: {
    handleClick () {
      // eslint-disable-next-line no-console
      console.log('click')
    }
  }
}
</script>

<style>
@import url("//at.alicdn.com/t/font_1223885_a68qqkvtjgr.css");

.iconfont {
  padding: 0 10px;
  font-size: 24px;
}
</style>
