import VueHoverMask from './VueHoverMask'

if (window && window.Vue) {
  // 浏览器环境
  window.Vue.component(VueHoverMask.name, VueHoverMask)
}

export default VueHoverMask
