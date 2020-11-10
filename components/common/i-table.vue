<template>
  <div class="i-table">     <!-- 按钮 -->
   <div class="btn-list" v-show="toolbar.length">
   <el-button
   v-for="(item, index) in toolbar"
   :key="index"
   @click="item.func"
   :type="item.type">
   {{item.btnName}}</el-button>
    </div>

   <div class="table-container">
     <el-table border
      :data="tableData"
       max-height="300"
       @selection-change="handleSelectionChange"
        v-if="selectionShowForm">
      <el-table-column v-if="selectionShow"
       type="selection"
        width="55"
         align="center"></el-table-column>
     <slot></slot>
    </el-table>
     </div>

  <div class="table-pagination"
  v-show="tablelength">
     <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageInfo.pageIndex"
      :page-sizes="[5, 10, 20, 50,100]"
      :page-size="pageInfo.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageInfo.totalSize">
    </el-pagination>
  </div>
  </div>
</template>

<script>
export default {
  name: 'i-table',
  props: {
    toolbar: {
      type: Array,
      default: () => {
        return []
      }
    },
    tableData: {
      type: Array,
      default: () => {
        return []
      }
    },
    tablelength: {
      type: Boolean,
      default: true
    },
    pageInfo: {
      type: Object,
      default: () => {
        return {
          pageIndex: 2,
          pageSize: 5,
          totalSize: 2
        }
      }
    },
    selectionShow: {
      type: Boolean,
      default: false
    },
    selectionShowForm: {
      type: Boolean,
      default: true
    }
  },
  // mounted () {
  //   console.log(this.pageInfo.pageIndex)
  // },
  methods: {
    // 每页多少条
    handleSizeChange (value) {
      // console.log(value, '每页多少条')
      this.$emit('handleSizeChange', value)
    },
    // 当前多少页
    handleCurrentChange (value) {
      // console.log(value, '每页多少页')
      this.$emit('handleCurrentChange', value)
    },
    // 多选框
    handleSelectionChange (row) {
      // console.log(row)
      this.$emit('handleSelectionChange', row)
    }
  },
  data () {
    return {
      currentPage: 1
    }
  }
}
</script>
<style lang="scss" scoped>
.i-table {
  padding: 10px;
  // width: 1100px;
  overflow: auto;
.btn-list {
margin-bottom: 10px;
}
.table-pagination {
  text-align: right;
}

}
</style>
