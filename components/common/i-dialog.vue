<template>
  <div>
    <el-dialog
      :title="title"
      :visible.sync="visible"
      :width="dialogwidth+'%'"
      :before-close="dialogBeforeClose"
      @close="dialogClose"
      :append-to-body="appendToBody">
      <slot></slot>

  <span slot="footer" class="dialog-footer">
  <el-button @click="dialogCancel">取消</el-button>
  <el-button type="primary" @click="dialogConfirm">确定</el-button>
  </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'i-dialog',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    dialogwidth: {
      type: Number,
      default: 50
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      visible: false
    }
  },
  methods: {
    dialogClose () {
      this.visible = false
      this.$emit('input', this.visible)
    },
    dialogBeforeClose () {
      this.$emit('dialog- -close')
      this.visible = false
    },
    dialogCancel () {
      this.$emit('dialog-cancel')
    },
    dialogConfirm () {
      this.$emit('dialog-confirm')
    }
  },
  watch: {
    value: {
      handler (value) {
        this.visible = value
      },
      deep: true
    }
  }
}
</script>
