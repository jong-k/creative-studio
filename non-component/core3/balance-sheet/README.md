# 재무상태표 만들기

## 스크린 리더 사용자 배려
원래는 재무상태표, 회사명 이렇게 나와야 하는데, 스크린 리더가 읽어줄 때는 회사명이 먼저 나오는게 맞으므로 CSS로 거꾸로 뒤집음

aria-hidden="true" 설정을 통해 스크린 리더가 안 읽게 함, 예를 들면 아래 내용들에 적용할 수 있음
- 아이콘이나 이미지같은 순수하게 장식용 컨텐츠
- 중복되는 컨텐츠
- menu 같은 화면 밖 or 접히는 컨텐츠

반면 focus가 필요한 곳에는 사용하면 안됨

### sr-only 클래스
screen reader 기능을 위해 존재하는 마크업으로, 화면에서는 안보임