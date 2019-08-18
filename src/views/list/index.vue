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
                  <el-select v-model="value" placeholder="请选择">
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
                  <p class="des">积分类别</p>
                  <el-select v-model="value" placeholder="请选择">
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
                  <p class="des">积分类别</p>
                  <el-select v-model="value" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
              </li>
          </ul>
          <div>
              <el-button style="background-color:#ffba16;color:#fff" icon="el-icon-search">查询</el-button>
              <el-button style="background-color:#fa6060;color:#fff" icon="el-icon-refresh">重置</el-button>
          </div>
      </div>
      <div class="content-wrap">
          <div class="content"></div>
      </div>


  </div>
</template>

<script>
export default {
    name:'list',
    data(){
        return {
            options: [{
            value: '选项1',
            label: '黄金糕'
            }]
        }
    }
}
</script>

<style>
.main{
    background: #ededed;
}

.boad{
    min-height: 200px;
    background: linear-gradient(to right bottom,#31e5f9,#6b5ef1);
    padding:10px 15px;
    color: #fff;
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

.content-wrap{
    padding:5px 15px;
    
}

.content{
    min-height: 300px;
    background: #fff;
    border-radius: 5px;
}
</style>