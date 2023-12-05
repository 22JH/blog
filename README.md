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
  - 코드 스플리팅을 통해 필요 없는 css가 로딩되지 않도록 적용
  - 타입 추론이 가능해지며 하드 코딩이 줄어듦
  - global theme 구성 후 dark/light 동적으로 구현
- MongoDB
  - 기존 따로 관리되던 comment와 category를 post doc으로 병합
  - category의 doc은 중복으로 count의 정보를 가지도록 저장
  - 이를 통해 populate 메서드를 제거해 로딩 속도 향상
 
## 배포
- server -> 기존에 사용중이던 lightsail에 배포
- client -> vercel에 배포
  - 문제점
    - elastic beanstalk으로 배포하려 했으나 role에서 자꾸 에러가 나서 vercel로 배포
    - local에 비해서 속도가 2~3배정도 차이가 난다.
    - stackoverflow에 질문한 결과 vercel과 mongodb 사이의 이슈라고한다
    - eleastic beanstalk으로 재배포 중 (에러해결중)
    - vercel로 배포 후 mongodb 옵션 최적화(gloabl promise)를 통해 완료
