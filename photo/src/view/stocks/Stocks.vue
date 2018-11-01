<template>
  <div class="top2">
    <!-- <p>
      这是组件props {{text}}
    </p> -->
    <el-row>
      <!-- {{valuedata}} -->
      <el-col :span="8">
        <el-card>
          <div class="box">
            &nbsp;
            <span>{{text.name}}
              <span>({{text.price}})</span>
            </span>
          </div>
          <div style="padding: 14px;">
            <div class="bottom clearfix">
              <input type="text" v-model.number='text.index' class="input">
              <el-button type="success" class="button" @click="btn()" :disabled="dal || text.index <= 0 || !Number.isInteger(text.index)">买入</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: ['text'],
  data () {
    return {
    }
  },
  computed: {
    dal () {
      return this.text.price * this.text.index > this.$store.getters.fund
    }
  },
  methods: {
    btn (val) {
      // console.log(this.text.price)
      // console.log(this.text.index)
      // console.log(this.$store.getters.fund)
      this.$store.dispatch('buyStock', this.text)
    }
  }
}
</script>
<style>
.top2{
 display: inline-block
}
.top2 .el-card {
      width: 409px
}
.time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
 .box{
   background-color: #bbffbb;
   line-height: 40px;
   height: 40px;
 }
  .button {
    padding: 10px;
    float: right;
    margin-top: -5px;
  }
  /* .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  } */
  .el-card__body {
    padding:0px
  }
.input {
    margin-left: 32px;
    width: 230px;
    height: 22px;
}
.el-col{
  padding: 6px;
}
</style>
