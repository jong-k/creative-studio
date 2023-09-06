export class Ball {
  // 공의 방향을 변경하려면 전체 캔버스의 크기를 알아야 충돌 판단 가능
  constructor(stageWidth, stageHeight, radius, speed) {
    this.radius = radius;
    // 공의 속도 => +N or -N 2가지로만 변하며 더 크게하면 속도 빨라짐
    // 방향값도 가짐
    this.velocityX = speed; // 음수이면 왼쪽으로, 양수이면 오른쪽으로 이동
    this.velocityY = speed; // 음수이면 위로, 양수이면 아래로 이동

    const diameter = this.radius * 2;
    // 최초 공의 위치를 랜덤하게 결정
    this.x = this.radius + Math.random() * (stageWidth - diameter);
    this.y = this.radius + Math.random() * (stageHeight - diameter);
  }

  draw(ctx, stageWidth, stageHeight, block) {
    this.x += this.velocityX;
    this.y += this.velocityY;
    const diameter = this.radius * 2;

    // 최초 공의 위치가 block 내부로 걸리면, 위치 재설정
    if (
      this.x >= block.x &&
      this.x <= block.maxX &&
      this.y >= block.y &&
      this.y <= block.maxY
    ) {
      this.x = this.radius + Math.random() * (stageWidth - diameter);
      this.y = this.radius + Math.random() * (stageHeight - diameter);
    }

    // 공 위치가 변하면 충돌
    this.bounceWindow(stageWidth, stageHeight);
    this.bounceBlock(block);

    ctx.fillStyle = "#ffd78a";
    ctx.beginPath();
    // 0도에서 2 * PI * r 라디안까지 원호 그림 -> 완전한 원
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  // stage 크기를 받아서 공의 현재 위치와 stage boundary를 비교하여 충돌 여부를 결정하고
  // 충돌인 경우 velocityX, velocityY에 -1 곱하여 방향 전환
  bounceWindow(stageWidth, stageHeight) {
    const minX = this.radius; // 공의 반지름이 위치할 수 있는 최소 X
    const minY = this.radius;
    const maxX = stageWidth - this.radius;
    const maxY = stageHeight - this.radius;

    // 공의 반지름이 최소 or 최대에 닿으면 방향 전환
    if (this.x <= minX || this.x >= maxX) {
      this.velocityX *= -1;
      this.x += this.velocityX;
    } else if (this.y <= minY || this.y >= maxY) {
      this.velocityY *= -1;
      this.y += this.velocityY;
    }
  }

  bounceBlock(block) {
    // 공이 블럭과 닿을 수 있는 영역
    const minX = block.x - this.radius;
    const maxX = block.maxX + this.radius;
    const minY = block.y - this.radius;
    const maxY = block.maxY + this.radius;

    // 블럭의 상하좌우 면 중 어떤 면과 공이 닿았는지 확인하여 방향을 바꿔줘야 함
    // 공이 블럭과 닿을 수 있는 영역에 닿으면
    if (this.x > minX && this.x < maxX && this.y > minY && this.y < maxY) {
      const x1 = Math.abs(minX - this.x);
      const x2 = Math.abs(maxX - this.x);
      const y1 = Math.abs(minY - this.y);
      const y2 = Math.abs(maxY - this.y);
      const min1 = Math.min(x1, x2);
      const min2 = Math.min(y1, y2);
      const min = Math.min(min1, min2); // 어디서 충돌했는지

      // 좌우로 충돌
      if (min === min1) {
        this.velocityX *= -1;
        this.x += this.velocityX;
        // 위아래로 충돌
      } else if (min === min2) {
        this.velocityY *= -1;
        this.y += this.velocityY;
      }
    }
  }
}
