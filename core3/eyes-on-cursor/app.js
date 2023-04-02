document.addEventListener("mousemove", (e) => {
  // 마우스 커서 좌표
  const cursorX = e.clientX;
  const cursorY = e.clientY;

  const mainImage = document.getElementById("main");
  // 메인 이미지를 둘러싼 직사각형 관련 정보를 가짐
  const rect = mainImage.getBoundingClientRect();

  // 메인 이미지의 정중앙 좌표
  const mainImageX = rect.left + rect.width / 2;
  const mainImageY = rect.top + rect.height / 2;

  const angleDeg = getAngleDeg(mainImageX, mainImageY, cursorX, cursorY);

  const eyes = document.querySelectorAll(".eye");
  eyes.forEach(
    (eye) => (eye.style.transform = `rotate(${22.5 + angleDeg}deg)`),
  );
});

// x1, y1 : 메인 이미지 정중앙의 좌표
// x2, y2 : 커서의 좌표
// 두 좌표 사이의 절대 각도를 deg 단위로 반환
function getAngleDeg(x1, y1, x2, y2) {
  const dy = y2 - y1; // 세로 길이
  const dx = x2 - x1; // 가로 길이
  const rad = Math.atan2(dy, dx);
  return rad * (180 / Math.PI); // degree 로 변환
}
