<template>
   <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="pageSize"
      layout="total, prev, pager, next"
      :total="total">
    </el-pagination>
</el-pagination>
</template>

<script>
export default {
    name:"Pagination",
    props:["total","pageSize"],
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.$emit("getPageNo",`${val}`)
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        currentPage1: 1,
      };
    }
}
</script>

<style lang="less">

</style>