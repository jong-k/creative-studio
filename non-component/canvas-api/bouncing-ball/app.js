import { Ball } from "./ball.js";
import { Block } from "./block.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");

    document.body.appendChild(this.canvas);

    // bind 를 통해 resize 메서드가 내부의 this가 아닌 App의 this를 사용할 수 있게 됨
    // 즉, resize의 this와 생성자의 this를 동기화
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();

    this.ball = new Ball(this.stageWidth, this.stageHeight, 60, 10);
    this.block = new Block(700, 30, 300, 250);

    // animate 함수 재귀호출하여
    window.requestAnimationFrame(this.animate.bind(this));
  }

  // 브라우저 리사이징에 대응하여
  // body = canvas 가로 세로 크기를 동기화
  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    // 레티나 디스플레이에서 선명하게 보이게 하기 위해
    // 이렇게 일괄적으로 2배 말고 픽셀레이트를 확인하여 수정하는 경우도 있음
    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);
  }

  // 애니메이션 실제 구동 메서드
  // requestAnimationFrame 함수는 자동으로 재실행마다 timestamp(ms)를 만들고, 이를 호출하는 함수 (animate)에 전달
  animate(t) {
    window.requestAnimationFrame(this.animate.bind(this));
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    this.block.draw(this.ctx);
    this.ball.draw(this.ctx, this.stageWidth, this.stageHeight, this.block);
  }
}

window.onload = () => {
  new App();
};
