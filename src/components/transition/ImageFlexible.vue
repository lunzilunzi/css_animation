<template>
  <div id="ImageFlexible">
    <div class="box example1">
      <img class="small-image" src="./static/img/timg.jpg">
      <div class="declare">在CSS 3引入Transition（过渡）这个概念之前，CSS是没有时间轴的。也就是说，所有的状态变化，都是即时完成。</div>
    </div>
    <div class="box example2">
      <img class="small-image" src="./static/img/timg.jpg">
      <div class="declare">transition的作用在于，指定状态变化所需要的时间。</div>
    </div>
    <div class="box example3">
      <img class="small-image" src="./static/img/timg.jpg">
      <div class="declare">我们还可以指定transition适用的属性，比如只适用于height。</div>
    </div>
    <div class="box example4">
      <img class="small-image" src="./static/img/timg.jpg">
      <div class="declare">在同一行transition语句中，可以分别指定多个属性。</div>
    </div>
    <div class="box example5">
      <img class="small-image" src="./static/img/timg.jpg">
      <div class="declare">我们希望，让height先发生变化，等结束以后，再让width发生变化。实现这一点很容易，就是为width指定一个delay参数。</div>
    </div>
    <div class="box example6">
      <img class="small-image" src="./static/img/timg.jpg">
      <div class="declare">transition的状态变化速度（又称timing function），默认不是匀速的，而是逐渐放慢，这叫做ease。</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ImageFlexible",
    data() {
      return {}
    },
    created() {
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  #ImageFlexible {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    .box {
      position: relative;
      width: 49%;
      height: 250px;
      text-align: center;
      border: 2px red solid;
      .declare {
        position: absolute;
        bottom: 0;
      }
    }
    .example1 {
      .small-image {
        width:64px;
        height:40px;
      }
      .small-image:hover {
        width:256px;
        height:160px;
      }
    }
    .example2 {
      .small-image {
        width:64px;
        height:40px;
        transition: 1s;
      }
      .small-image:hover {
        width:256px;
        height:160px;
      }
    }
    .example3 {
      .small-image {
        width:64px;
        height:40px;
        transition: 1s height;
      }
      .small-image:hover {
        width:256px;
        height:160px;
      }
    }
    .example4 {
      .small-image {
        width:64px;
        height:40px;
        transition: 1s height, 2s width;
      }
      .small-image:hover {
        width:256px;
        height:160px;
      }
    }
    .example5 {
      .small-image {
        width:64px;
        height:40px;
        // width延迟1秒执行, 并且1秒执行完
        transition: 1s height, 2s 2s width;
      }
      .small-image:hover {
        width:256px;
        height:160px;
      }
    }
    .example6 {
      .small-image {
        width:64px;
        height:40px;
        /*
         *（1）linear：匀速
         *（2）ease-in：加速
         *（3）ease-out：减速
         *（4）cubic-bezier函数：自定义速度模式
              使用 http://cubic-bezier.com 定做
         **/
        transition: 1s cubic-bezier(1,-0.15,1,.58);
      }
      .small-image:hover {
        width:256px;
        height:160px;
      }
    }
  }
</style>
