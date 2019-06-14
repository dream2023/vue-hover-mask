<template>
  <div class="vue-hover-mask">
    <slot></slot>
    <span
      @click="handleClick"
      class="vue-hover-mask_actions"
    >
      <slot name="action"></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'VueHoverMask',
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>

<style>
.vue-hover-mask {
  position: relative;
  overflow: hidden;
  background-color: #fff;
  border: 1px solid #c0ccda;
  border-radius: 6px;
  box-sizing: border-box;
  width: auto;
  height: auto;
  margin: 0 8px 8px 0;
  display: inline-block;
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  font-size: 14px;
  color: #606266;
  line-height: 0;
}

.vue-hover-mask_actions {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  cursor: default;
  text-align: center;
  color: #fff;
  opacity: 0;
  font-size: 24px;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s;
}
.vue-hover-mask_actions > * {
  cursor: pointer;
  padding: 5px;
  margin: 0 3px;
}
.vue-hover-mask_actions::after {
  display: inline-block;
  content: "";
  height: 100%;
  vertical-align: middle;
}
.vue-hover-mask_actions:hover {
  opacity: 1;
}
</style>
