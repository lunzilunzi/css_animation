<template>
  <div id="BoxChange">
    <div class="box example1">
      <div class="target-box"></div>
      <div class="declare">上面代码表示，rainbow效果一共有三个状态，分别为起始（0%）、中点（50%）和结束（100%）。如果有需要，完全可以插入更多状态。</div>
    </div>
    <div class="box example2">
      <div class="target-box"></div>
      <div class="declare">默认情况下，动画只播放一次。加入infinite关键字，可以让动画无限次播放。</div>
    </div>
    <div class="box example3">
      <div class="target-box"></div>
      <div class="declare">也可以指定动画具体播放的次数，比如3次。</div>
    </div>
    <div class="box example4">
      <div class="target-box"></div>
      <div class="declare">动画结束以后，会立即从结束状态跳回到起始状态。如果想让动画保持在结束状态，需要使用animation-fill-mode属性。</div>
    </div>
    <div class="box example5">
      <div class="target-box"></div>
      <div class="declare">动画循环播放时，每次都是从结束状态跳回到起始状态，再开始播放。animation-direction属性，可以改变这种行为。</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BoxChange",
    data() {
      return {}
    },
    created() {
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  @keyframes rainbow {
    0% { background: #c00; }
    50% { background: orange; }
    100% { background: yellowgreen; }
  }

  @keyframes rainbow2 {
    0% { background-color: yellow; }
    100% { background: blue; }
  }

  #BoxChange {
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
      .target-box {
        width: 100px;
        height: 100px;
        border: 1px blue solid;
      }
      .declare {
        position: absolute;
        bottom: 0;
      }
    }

    .example1 {
      .target-box:hover {
        animation: 1s rainbow;
      }
    }
    .example2 {
      .target-box:hover {
        animation: 1s rainbow infinite;
      }
    }
    .example3 {
      .target-box:hover {
        animation: 1s rainbow 3;
      }
    }
    .example4 {
      // animation-fill-mode还可以使用下列值。
      /**
       *（1）none：默认值，回到动画没开始时的状态。
       *（2）backwards：让动画回到第一帧的状态。
       *（3）both: 根据animation-direction（见后）轮流应用forwards和backwards规则。
       */
      .target-box:hover {
        animation: 1s rainbow forwards;
      }
    }
    .example5 {
      .target-box:hover {
        // 默认情况是，animation-direction等于normal。
        animation: 1s rainbow2 infinite alternate;
      }
    }
  }
</style>
