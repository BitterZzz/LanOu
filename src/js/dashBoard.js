//
export function initCanvas(item = '', dosage = 0, gross = 0, color) {
  var canvas = document.getElementById(item), //获取canvas元素
    context = canvas.getContext("2d"), //获取画图环境，指明为2d
    centerX = canvas.width / 2, //Canvas中心点x轴坐标
    centerY = canvas.height / 2, //Canvas中心点y轴坐标
    rad = (Math.PI * 2) / 100, //将360度分成100份，那么每一份就是rad度
    speed = 0; //(初始值)
  let msg = parseInt((dosage / gross) * 100);
  let _msg = parseInt((dosage / gross) * 1000) / 10;
  //绘制5像素宽的运动外圈
  function blueCircle(n) {
    context.save();
    context.strokeStyle = color; //设置描边样式
    context.lineWidth = 10; //设置线宽
    context.beginPath(); //路径开始
    context.arc(
      centerX,
      centerY,
      36,
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
    context.strokeStyle = color;
    context.font = "12px Arial";
    context.strokeText(n.toFixed(0) + "%", centerX - 10, centerY - 10);
    context.restore();
  }
  //动画循环
  (function drawFrame() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    text(speed);
    blueCircle(speed);
    if (speed < msg) {
      speed += 1;
      window.requestAnimationFrame(drawFrame);
    } else if (speed === msg) {
      speed += _msg - msg;
      window.requestAnimationFrame(drawFrame);
    } else {
      return;
    }
  })();
}


export function waterCanvas(item = '',number = 0,maximum = 0,color) {
  if(number === "" || maximum === "" || color === ""){
    number = 0;
    maximum = 0;
    color = "#000";
  }
  var canvas = document.getElementById(item), //获取canvas元素
    context = canvas.getContext("2d"), //获取画图环境，指明为2d
    centerX = canvas.width / 2, //Canvas中心点x轴坐标
    centerY = canvas.height / 2, //Canvas中心点y轴坐标
    rad = (Math.PI * 1.54) / maximum, //将360度分成100份，那么每一份就是rad度
    speed = 0; //(初始值)
  //绘制5像素宽的运动外圈
  function blueCircle(n) {
    context.save();
    context.strokeStyle = color; //设置描边样式
    context.lineWidth = 10; //设置线宽
    context.beginPath(); //路径开始
    context.arc(
      centerX,
      centerY,
      36,
      -Math.PI * 1.28,
      -Math.PI * 1.28 + n * rad ,
      false
    ); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
    context.stroke(); //绘制
    context.closePath(); //路径结束
    context.restore();
  }
  //外圈绘制
  function whiteCircle() {
    context.save();
    context.beginPath();
    context.lineWidth = 10; //设置线宽
    context.strokeStyle = "#000";
    context.arc(centerX, centerY, 36, -Math.PI * 1.28, Math.PI / 4, false);
    context.stroke();
    context.closePath();
    context.restore();
  }
  //动画循环
  (function drawFrame() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    whiteCircle();
    blueCircle(speed);
    if (speed < number) {
      speed += maximum / 50;
      window.requestAnimationFrame(drawFrame);
    } else {
      return;
    }
  })();
}