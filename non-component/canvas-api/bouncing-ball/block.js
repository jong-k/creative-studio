export class Block {
  constructor(width, height, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.maxX = width + x;
    this.maxY = height + y;
  }

  draw(ctx) {
    const xGap = 80;
    const yGap = 60;
    // 앞방향 블럭
    ctx.fillStyle = "#ff384e";
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fill();

    // 밑부분 shadow
    ctx.fillStyle = "#190f3a";
    ctx.beginPath();
    ctx.moveTo(this.maxX, this.maxY); // 블럭의 우하단
    ctx.lineTo(this.maxX - xGap, this.maxY + yGap); // 그림자의 우하단
    ctx.lineTo(this.x - xGap, this.maxY + yGap); // 그림자의 좌하단
    ctx.lineTo(this.x, this.maxY); // 블럭의 좌하단
    ctx.fill();

    // 옆부분 shadow
    ctx.fillStyle = "#9d0919";
    ctx.beginPath();
    ctx.moveTo(this.x, this.y); // 블럭의 좌상단
    ctx.lineTo(this.x, this.maxY); // 블럭의 좌하단
    ctx.lineTo(this.x - xGap, this.maxY + yGap); // 그림자의 좌하단
    ctx.lineTo(this.x - xGap, this.maxY + yGap - this.height); // 그림자의 좌상단
    // 다시 시작지점으로 안가도 됨
    ctx.fill();
  }
}
