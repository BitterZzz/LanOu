<template>
  <div class="m_percentage">
    <canvas id="canvas" width="84" height="84"></canvas>
  </div>
</template>
<script>
export default {
  methods: {
    initCanvas() {
      var canvas = document.getElementById("canvas"), //获取canvas元素
        context = canvas.getContext("2d"), //获取画图环境，指明为2d
        centerX = canvas.width / 2, //Canvas中心点x轴坐标
        centerY = canvas.height / 2, //Canvas中心点y轴坐标
        rad = (Math.PI * 2) / 100, //将360度分成100份，那么每一份就是rad度
        speed = 0; //(初始值)

      //绘制5像素宽的运动外圈
      function blueCircle(n) {
        context.save();
        context.strokeStyle = "#00a2ff "; //设置描边样式
        context.lineWidth = 10; //设置线宽
        context.beginPath(); //路径开始
        context.arc(
          centerX,
          centerY,
          30,
          -Math.PI / 2,
          -Math.PI / 2 + n * rad,
          false
        ); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
        context.stroke(); //绘制
        context.closePath(); //路径结束
        context.restore();
      }
      //百分比文字绘制
      function text(n) {
        context.save();
        context.strokeStyle = "#000";
        context.font = "12px Arial";
        context.strokeText(n.toFixed(0) + "%", centerX, centerY);
        context.restore();
      }
      //动画循环
      (function drawFrame() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        text(speed);
        blueCircle(speed);
        if (speed < 62) {
          speed += 1;
          window.requestAnimationFrame(drawFrame);
        } else {
          return;
        }
      })();
    }
  },
  mounted() {
    this.initCanvas();
  }
};
</script>
<style lang="scss" scoped>
.m_percentage {
  margin: 0 auto;
  position: relative;
  text-align: center;
}
</style>