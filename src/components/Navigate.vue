<template>
  <div id="Navigate">
    <!--<div class="container-shrink" @click="changeContainerStatus">-->
    <div class="container-shrink" @click="changeContainerStatus">
      <!--<icon name="255/255_侧栏，列表，更多" :scale="5"></icon>-->
      <!--<span class="container-shrink-describe">-->
        <!--{{ !containerShrinkStatus ? '点击缩放' : '点击展开' }}-->
      <!--</span>-->
    </div>
    <div class="user-info">
      <div class="user-image"></div>
      <div class="user-type">
        <el-dropdown>
          <span class="el-dropdown-link">
            user<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item disabled>首页</el-dropdown-item>
            <el-dropdown-item disabled>个人中心</el-dropdown-item>
            <el-dropdown-item disabled>系统管理</el-dropdown-item>
            <el-dropdown-item disabled divided>登出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Navigate',
    data () {
      return {

      }
    },
    computed: {
      containerShrinkStatus () {
        return this.$store.state.containerShrinkStatus
      }
    },
    created () {

    },
    methods: {
      changeContainerStatus () {
        this.$store.commit('changeContainerShrinkStatus')
      }
    }
  }
</script>

<style lang="scss" scoped>
  #Navigate {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    background-color: #ffffff;
    border-bottom: 1px solid #eee;
    .container-shrink {
      margin-left: 20px;
      font-size: 35px;
    }
    .user-info {
      display: flex;
      align-items: center;
      height: 32px;
      .user-image {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        background-image: url(/static/baldness.jpg);
        background-size:100% 100%
      }
      .user-type {
        margin: 0 10px;
        .el-dropdown-link {
          color: #000000;
        }
      }
    }
  }
</style>
