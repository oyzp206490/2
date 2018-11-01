<template>
  <div class="top3">
    <el-row>
      <el-col :span="8" >
        <el-card>
          <div class="boxx">
            &nbsp;
            <span>{{text.name}}
              <small>(Price:{{text.price}} | quantity:{{text.index}})</small>
            </span>
          </div>
          <div style="padding: 14px;">
            <div class="bottom clearfix">
              <input type="text" v-model.number='value' class="input">
              <el-button type="success" class="button" @click="sellstocks()" :disabled="val || text.index <= 0 || !Number.isInteger(text.index)">{{val? '数量不足':'股票卖出'}}</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  props: {text: {
    type: Object
  }},
  data () {
    return {
      value: ''
    }
  },
  computed: {
    val () {
      return this.value > this.text.index
    }
  },
  methods: {
    ...mapActions({
      stocks: 'sellstocks'
    }),
    sellstocks () {
      // console.log(this.text)
      const orden = {
        id: this.text.id,
        price: this.text.price,
        index: this.value
      }
      console.log(orden)
      this.$store.dispatch('sellstocks', orden)
    }
  }
}
</script>
<style>
.top3{
 display: inline-block
}
.top3 .el-card {
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
 .boxx{
   background-color: #bbffbb;
   line-height: 40px;
   height: 40px;
   /* float: left; */
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
