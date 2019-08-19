<template>
  <div class="main">
      <div class="boad">
          <div class="back">
            <i class="el-icon-refresh"></i>
            <span>返回主页面</span>
         </div>
          <ul class="select-wrap">
              <li>
                  <img class="icon" src="./../../../static/list/images/icon_type.png" alt="">
                  <p class="des">积分类别</p>
                  <el-select v-model="search.type" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
              </li>
              <li>
                  <img class="icon" src="./../../../static/list/images/icon_status.png" alt="">
                  <p class="des">状态</p>
                  <el-select v-model="search.status" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
              </li>
              <li>
                  <img class="icon" src="./../../../static/list/images/icon-date.png" alt="">
                  <p class="des">日期</p>
                  <el-date-picker
                    v-model="search.date"
                    type="date"
                    placeholder="选择日期">
                    </el-date-picker>
              </li>
          </ul>
          <div class="operate">
              <el-button style="background-color:#ffba16;color:#fff;float:left" icon="el-icon-search">查询</el-button>
              <el-button style="background-color:#fa6060;color:#fff;float:right" icon="el-icon-refresh">重置</el-button>
          </div>
      </div>
      <div class="content-wrap">
          <div class="content">
              <div class="list-item" v-for="(item,index) in list" :key="'item-'+index">
                  <p>
                      <span class="label">得分：</span>
                      <span>{{item.score}}分</span>
                  </p>
                  <p>
                      <span class="label">状态：</span>
                      <span>{{item.status}}</span>
                  </p>
                  <p>
                      <span class="label">行为发生时间：</span>
                      <span>{{item.time}}</span>
                  </p>
                  <p>
                      <span class="edit btn">修改</span>
                      <span class="eye btn">查看</span>
                  </p>
              </div>
          </div>
      </div>


  </div>
</template>

<script>
export default {
    name:'list',
    data(){
        return {
            search:{
                time:'',
                status:'',
                date:''
            },
            options: [{
            value: 'test',
            label: '测试'
            }],
            list:[{
                score:2,
                status:'审核通过',
                time:'2019-08-08'
            },{
                score:2,
                status:'审核通过',
                time:'2019-08-08'
            }]
        }
    }
}
</script>

<style>
.main{
    background: #ededed;
    color: #5a5a5a;
}

.boad{
    min-height: 200px;
    background: linear-gradient(to right bottom,#31e5f9,#6b5ef1);
    padding:10px 15px;
    color: #fff;
}

.boad .operate{
    width:200px;
    margin: 0 auto;
    overflow: hidden;
}

.select-wrap{
    width: 100%;
    margin-top: 20px;
    padding:10px;
    margin:20px auto;
    overflow: hidden;
    background: linear-gradient(to right bottom,#3bebfc,#815cf6);
    box-shadow: 0 0 6px rgba(0,0,0,.3);
}

.select-wrap li{
    width: 33.33%;
    float: left;
    padding:5px;
    text-align: center;
}

.select-wrap li img{
    width: 45%;
}

.content-wrap{
    padding:5px 15px;
    
}

.content{
    min-height: 300px;
    background: #fff;
    border-radius: 5px;
    padding: 5px;
}

.content .list-item{
    overflow: hidden;
}

.content .list-item p{
    line-height: 1.8;
    padding:5px;
    font-size: 12px;
}

.content .list-item p:nth-child(odd){
    background-color: #f4f8ff
}

.content .list-item p .label{
    display: inline-block;
    width: 100px;
}

.content .list-item p .btn{
    float: right;
    padding-right:10px;
    text-decoration: underline;
}

.list-item p .edit{
    color: #f44172;
}

.list-item p .eye{
    color: #5378f5;
}
</style>