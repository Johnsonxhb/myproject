<template>
  <div class="main">
    <div class="operate">
      <div class="btn">
        <i class="el-icon-plus"></i>
        新增
      </div>
      <div class="btn">
        <i class="el-icon-edit-outline"></i>
        待审核  
      </div>
      <div class="btn">
        <i class="el-icon-refresh"></i>
        刷新
      </div>
      <div class="btn">
        <i class="el-icon-search"></i>
        修改密码
      </div>
    </div>
    <div class="card">
      <ul>
        <li v-for="(item,index) in personInfo" :key="'item-'+index">
          <span class="title">{{item.label}}</span>
          <span class="">{{item.value}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {getPointsStatistics} from '@/api/login'
export default {
  name: 'Home',
  data () {
    return {
      personInfo:[{
        label:'部门信息',
        value:'测试部门'
      },{
        label:'人员姓名',
        value:'测试人员'
      },{
        label:'总积分',
        value:'1分'
      },{
        label:'可兑换积分',
        value:'2分'
      },{
        label:'部门排名',
        value:''
      },{
        label:'职业素养',
        value:''
      },{
        label:'人力资源',
        value:''
      },{
        label:'现场管理',
        value:''
      },{
        label:'专项活动',
        value:''
      },{
        label:'创新改善',
        value:''
      },{
        label:'制度惩奖',
        value:''
      }]
    }
  },
  created(){
    this.getPointsStatistics()
  },
  methods: {
    getPointsStatistics(){
      getPointsStatistics().then(res => {
        console.log('home 数据',res)
      })
    }
  }
}
</script>

<style scoped>
  .main{
    width: 100%;
    min-height: 100vh;
    position: relative;
    padding:0.5rem;
    font-size: 0.9rem;
    background: linear-gradient(to right bottom,#31e7f9,#6b5ef1)
  }

  .operate {
    width: 100%;
    overflow: hidden;
    margin: 0.5rem 0; 
    color: #fff;
    text-align: center;
  }

  .operate .btn{
    width: 22%;
    padding:0.6rem 0;
    margin-right: 4%;
    float: left;
    border-radius: 0.3rem;
  }

 .operate .btn:nth-child(1){
   background-color: #0d90f5;
 }

 .operate .btn:nth-child(2){
   background-color: #1291bb;
 }

 .operate .btn:nth-child(3){
   background-color: #5370f9;
 }

 .operate .btn:nth-child(4){
   background-color: #483ebd;
   margin-right: 0;
 }

 .main .card {
   padding:1rem 0.5rem;
   background-color: #fff;
   min-height: 15rem;
   border-radius: 0.5rem;
 }

 .card li{
   line-height: 2.5;  
   color: #5a5a5a;
 }

 .card li span{
   padding-left: 1rem;
 }

.card li span.title{
  display: inline-block;
  width: 8rem;
}

.card li:nth-child(odd){
  background-color: #f4f8ff;
}

.card li:nth-child(odd) span.title{
  background-color: #cddbf4
}

  
</style>
