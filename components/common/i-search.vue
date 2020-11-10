<template>
<div class="i-search">
<el-form :model="model" :inline="true" ref="form">
<slot></slot>

<el-form-item>
  <el-button type="primary" @click="search">搜索</el-button>
  <el-button type="primary" @click="reset">重置</el-button>
</el-form-item>
</el-form>
</div>
</template>
<script>
export default {
  name: 'i-earch',
  props: {
    model: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    search () {
      this.$emit('search')
    },
    reset () {
      this.$refs.form.resetFields()
      this.$emit('reset')
    }
  }
}
</script>

<style lang="scss" scoped>
.i-search {
  padding: 10px;

  .el-form {
   /deep/ .el-form-item {
    margin-bottom: 0;
    // width: 26%;
    .el-form-item__label {
      width: 80px;
     }
    }
  }
}
// /deep/ .el-input {
//         width: 220px;
//       }
</style>
