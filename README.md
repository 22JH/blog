## 기술 스택
- NextJS 14.0.0 & React 18
- Mongodb 5.0 & Moongoose
- vanila Extract
- NextAuth
- Zustand
- react-three-fiber

## 기능
- 로그인
  - NextAuth를 이용한 jwt, Oauth구현
- 글 작성
  - toast-ui-editor 사용
  - react 18 버전과 호환이 되질 않아 강제로 설치
  - Markdown 형태의 글 작성기능
  - 해시 태그 형태의 카테고리 구현
- 글 조회
  - 페이지 네이션 기능 구현
  - Image 태그의 sizes 프로퍼티를 통한 최적화
  - Firebase Storage 이미지 저장시 webp로 변경 -> 이미지 당 평균 31ms에서 13ms로 성능 향상
  - 댓글 기능 및 카테고리 : mongoose를 이용해 관계형 DB로 구현
- 방명록
  - 댓글과 동일
- 메인페이지
  - React-three-fiber을 이용해 페이지 내 3D 모델링 파일 구현
  - Blender와 polycam을 이용해 모델링 파일 제작
  - 토글 버튼을 이용해 material(텍스쳐) on/off 기능 구현
- Vanila Extract
  - 컴파일 단계에서 css 빌드를 할 수 있는 Vanila Extract 도입
  - 기존의 css in js 처럼 런타임에서 style을 생성 하며 성능 저하를 일으키는 문제를 방지
  - 타입 추론이 가능해지며 하드 코딩이 줄어듦
  - dark/light 테마 구현(예정)
 
## 배포
- 진행중
