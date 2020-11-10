<template>
<div>
  <div class="box">
  <div :class="['box-child',item.check === true ? 'active': '']" v-for="item in allTagsDemo"
  :key="item.value"
  @click="func(item)">
  <div class="triangle" v-show="item.check===true"></div>
  <img v-show="item.check===true" src="../../assets/right.png" alt="">
  {{item.text}}</div>
  </div>
  </div>
</template>
<script>
export default {
  props: {
    allTags: {
      type: Array,
      default () {
        return []
      }
    },
    checked: {
      type: Array,
      default () {}
    }
  },
  data () {
    return {
      checkedDemo: [],
      allTagsDemo: [],
      check: false,
      num: 0
    }
  },
  watch: {
    checked (value) {
      this.checkedDemo = value
      // console.log(this.checkedDemo, 'watch')
    }

  },
  created () {
    this.allTags.forEach(element => {
      this.allTagsDemo.push(Object.assign({}, element, {check: false}))
    })
  },
  methods: {
    func (value) {
      let a = 0
      console.log(a, 'ayikaishi ')
      if (value.text === '全部') {
        if (value.check === false) {
          value.check = true
          this.allTagsDemo.forEach(element => {
            element.check = true
            this.checkedDemo.push(element.value)
          })
          this.$emit('onChange', this.checkedDemo)
        } else {
          value.check = false
          this.allTagsDemo.forEach(element => {
            element.check = false
            this.checkedDemo.pop(element.value)
          })
          this.$emit('onChange', this.checkedDemo)
        }
      } else {
        if (value.check === false) {
          value.check = true
          for (let i = 0; i < this.allTagsDemo.length; i++) {
            if (this.allTagsDemo[i].check === false && this.allTagsDemo[i].value !== '1') {
              console.log(this.allTagsDemo[i], 'all')
              a = a + 1
              break
            }
          }
          console.log(a)
          if (a === 0) {
            this.allTagsDemo.forEach(value => {
              if (value.value === '1') {
                value.check = true
              }
            })
          }
          this.checkedDemo.push(value.value)
          this.$emit('onChange', this.checkedDemo)
          // console.log(this.checkedDemo, '确定')
        } else {
          value.check = false
          this.allTagsDemo.forEach(value => {
            if (value.value === '1') {
              value.check = false
            }
          })
        }
        this.checkedDemo.pop(value.value)
        this.$emit('onChange', this.checkedDemo)
        // console.log(this.checkedDemo, '取消')
      }
    }
  }

}
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
}
.box {
  overflow: auto;
  width: 50%;
  border: 1px solid #cccccc;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  left: 50%;
  top: 10%;
  transform: translate(-50%);
  justify-content: space-between;
  /* text-align: center; */
}
.box-child {
 width: 25%;
 box-sizing: border-box;
 overflow: auto;
 /* text-align: center; */
 height: 30px;
 margin: 10px;
 border: 1px solid;
 display: flex;
 line-height: 30px;
 /* align-content: center; */
 justify-content: center;
 border-radius: 5px;
 font-size: 6vmin;
  background-color: #ebebeb;
}
.active {
 border: 1px solid red;
 display: flex;
 line-height: 30px;
 /* align-content: center; */
 justify-content: center;
 border-radius: 5px;
 color: red;
 background-color: #fff;
 position: relative;
 overflow: hidden;
}
  /* 三角形 */
.triangle {
    width: 0px;
    height: 0px;
    position: absolute;
    bottom: 0;
    right: 0;
    border-left: 2vw solid transparent;
    /* border-top-right-radius: 10px; */
    border-bottom: 2vw solid red;
}
img{
  position: absolute;
  right: 1vmin;
  bottom: 1vmin;
  width: 3vmin;
  height: 3vmin;
}
</style>
