<template>
  <div id="blogTable">
  <section>
    <el-row :gutter="24">
      <el-col :span="2" :offset="22">
        <el-button type="primary" @click="toAdd">新增</el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="blogTitle" label="名称" width="1080">
      </el-table-column>
      <el-table-column prop="creatTime" label="日期" width="400" align="right">
      </el-table-column>
    </el-table>

    <div class="block">
      <el-row :gutter="20">
        <el-col :span="12" :offset="12">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 50, 100]"
            :page-size="pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="totalCount">
          </el-pagination>
        </el-col>
      </el-row>
    </div>
  </section>
  </div>
</template>

<script>
  import axios from "axios"

  export default {
    name: "blogTable",
    data() {
      return {
        //请求的URL
        url:'/api/blog/list',
        tableData: [],
        currentPage: 1,
        //默认每页数据量
        pagesize: 10,
        //查询的页码
        start: 1,
        //默认数据总数
        totalCount: 0,
      }
    },
    methods: {
      //从服务器读取数据
      loadData: function(criteria, pageNum, pageSize){
        let this1 = this;
        var params = new URLSearchParams();
        params.append('pageNum', pageNum);
        params.append('pageSize', pageSize);
        axios.post(this.url,params)
             .then(function (response) {
               var listData = response.data;
               if(listData.success){
                 this1.tableData = listData.data;
                 this1.totalCount = listData.total;
               }
             })
             .catch(err =>(this.errorInfo = "暂无数据！"))
      },
      //每页显示数据量变更
      handleSizeChange: function(val) {
        console.log(val)
        this.pagesize = val;
        this.loadData(this.criteria, this.currentPage, this.pagesize);
      },
      //页码变更
      handleCurrentChange: function(val) {
        console.log(val)
        this.currentPage = val;
        this.loadData(this.criteria, this.currentPage, this.pagesize);
      },
      toAdd: function(val) {
        this.$router.push({path:'/addBlog'})
      },
    },
    mounted() {
      this.loadData(this.criteria, this.currentPage, this.pagesize);
    },
  }

</script>

<style scoped>

</style>
