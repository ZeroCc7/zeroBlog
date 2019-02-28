<template>
  <div id="blogTable">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="title" label="名称" width="1080">
      </el-table-column>
      <el-table-column prop="date" label="日期" width="400" align="right">
      </el-table-column>
    </el-table>

    <div class="block">
      <el-row :gutter="20">
        <el-col :span="12" :offset="12">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[10, 20, 50, 100]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="100">
          </el-pagination>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: "blogTable",
    data() {
      return {
        tableData: [{
          title: '王小虎',
          date: '2016-05-02',
        }, {
          date: '2016-05-04',
          title: '王小虎',
        }, {
          date: '2016-05-01',
          title: '王小虎',
        }, {
          date: '2016-05-03',
          title: '王小虎',
        }]
      }
    },
    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(function(row)  {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      callbackFunction(result) {
        alert(result + "aaa");
      },
      fetchData(){ //获取数据
        this.$http.jsonp("http://localhost:8111//view/enterprise!getListByParam.action",{//跨域请求数据
          params: {
            // keywords:this.keyword//输入的关键词
          },
          jsonpCallback:'callbackFunction'//这里是callback
        }).then(function(res) {//请求成功回调，请求来的数据赋给searchList数组
          this.total = res.body.count;
          this.currentPage = res.body.curr;
          this.tableData = res.body.data;
          console.info(res);
        },function(res) {//失败显示状态码
          alert("res.status:"+res.status)
        })
      },
      handleSizeChange(val){
        this.pageSize = val;
        this.currentPage = 1;
        this.fetchData(1, val);
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val){
        this.currentPage = val;
        this.fetchData(val, this.pageSize);
        console.log(`当前页: ${val}`);
      }

    }
  }

</script>

<style scoped>

</style>
