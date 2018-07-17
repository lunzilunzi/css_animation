<template>
  <div id="Container">
    <div class="container" :style="containerStyle">
      <div class="container-title" :style="containerStyle">
        <div class="title-font" v-if="!containerShrinkStatus">
          <span class="abbreviation">GIS</span>
          <span class="description">可视化系统</span>
        </div>
        <div class="title-font-shrink" v-else>
          <span class="abbreviation">GIS</span>
        </div>
      </div>
      <div class="container-list">
        <el-menu
          :collapse="containerShrinkStatus"
          default-active="1.1"
          :router="true"
          background-color="#00142a"
          text-color="#fff"
          active-text-color="#6d40ff">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>过渡</span>
            </template>
            <el-menu-item index="1.1" :route="{path: '/transition/image-flexible'}">
              <i class="el-icon-menu"></i>
              <span slot="title">图片放大</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>动画</span>
            </template>
            <el-menu-item index="2.1" :route="{path: '/animation/box-change'}">
              <i class="el-icon-menu"></i>
              <span slot="title">盒子的变化</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Container',
  data () {
    return {

    }
  },
  computed: {
    containerShrinkStatus () {
      return this.$store.state.containerShrinkStatus
    },
    containerStyle() {
      if (!this.containerShrinkStatus) {
        return {
          width: '230px'
        }
      } else {
        return {
          width: '64px'
        }
      }
    }
  },
  created () {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  #Container {
    height: 100%;
    .container {
      /*width: 230px;*/
      height: 100%;
      background-color: #00142a;
      .container-title {
        /*width: 230px;*/
        height: 64px;
        background-color: #002140;
        .title-font {
          height: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          .abbreviation {
            font-size: 40px;
            color: #6d40ff;
            margin-left: 30px;
          }
          .description {
            color: #fdfdfd;
            margin-right: 40px;
          }
        }
        .title-font-shrink {
          width: 64px;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          .abbreviation {
            font-size: 32px;
            color: #6d40ff;
          }
        }
      }
      .container-list {
        .el-menu {
           border-right: 0!important;
        }
      }
    }
  }
</style>
