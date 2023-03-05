# JS로 스크롤 애니메이션 구현하기

## 1. JS Intersection Observer API
- 특정 element가 뷰포트에 얼마나 (몇 퍼센트 등) 있는지를 확인하여 클래스를 붙일 수 있음
- 그리고 이를 CSS transition과 활용해서 스크롤 애니메이션 조성 가능

## 2. CSS @scroll-timeline 소개
- CSS만으로 스크롤 애니메이션을 구현할 수 있는 CSS 프로퍼티
- 하지만, 아직 너무 신기술이라 지원하는 브라우저가 없음

## 3. dicebear
- 미리 만들어진 아바타를 활용할 수 있는 API
- HTTP-API 방식으로 img src에 넣어서 불러올 수 있다
- 또한 npm 으로 설치해서 사용도 가능하다