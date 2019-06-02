<template>
  <div>
    <vue-hover-mask @click="handleClick">
      <img
        :src="publicPath + 'vue.jpg'"
        style="width: 200px;height: 200px;"
      >
      <template v-slot:action>aa</template>
    </vue-hover-mask>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      publicPath: process.env.BASE_URL,
    }
  },
  methods: {
    handleClick () {
      // eslint-disable-next-line no-console
      console.log('click')
    }
  },
  mounted () {}
}
</script>
