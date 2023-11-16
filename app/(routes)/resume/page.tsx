import Link from "next/link";
import styles from "./resume.module.css";
import { container } from "./resume.css";

export default function Resume() {
  return (
    <div className={container}>
      <div className={styles.reusmeName}>
        <h2>이주형</h2>
        <h5>Frontend Engineer</h5>
      </div>
      <div className={styles.resumeIntro}>
        <h4>About</h4>
        <p>Typescript와 ReactJS, NextJS로 웹 개발을 하고있습니다.</p>
        <p>자잘한 문제라도 원인과 결과를 명확하게 하는 것을 좋아합니다.</p>
        <p>총 1400시간의 교육을 이수했으며 3개의 팀프로젝트를 경험했습니다.</p>
        <p>
          프론트엔드 뿐만아니라 Jenkins, Docker, Nginx, Klaytn, Ethereum 등
          다양한 분야도 가리지 않고 경험했습니다.
        </p>
      </div>
      <div className={styles.resumeCarereers}>
        <h4>Careers</h4>
        <h5>수잇(Suit) / Software Engineer (2023.07 ~ 12월 퇴사 예정) </h5>
        <p>셀프 헤어스타일링을 위한 키오스크</p>
        <p>웹 기반 키오스크 제작</p>
        <p>Frontend, CI/CD, IoT 담당</p>
        <p>React, Typescript 기반</p>
        <p>Van(KIS)사와 MOU 유도 및 진행</p>
        <p>
          기존의 바닐라 자바스크립트 리더기 SDK를 React, Tyescript로
          마이그레이션
        </p>
        <p>유저 결제기능 및 사용기능 구현</p>
        <p>어드민 매출 테이블 형태로 조회 및 엑셀 파일 추출 기능 구현</p>
        <p>AWS에 nginx와 docker을 이용해 배포</p>
        <p>Jenkins와 Docker를 이용해 자동 배포 구축</p>
      </div>
      <div className={styles.resumeProjects}>
        <h4>Projects</h4>
        <div className={styles.project}>
          <h5>
            공유사이 / 토이 프로젝트 (22.04.29 ~ 21.05.22){" "}
            <Link
              href="https://github.com/22JH/share42"
              target="_blacnk"
              rel="noreferrer"
            >
              Github
            </Link>
          </h5>
          <p>
            Web nfc와 라즈베리파이, 아두이노로 제작한 사물함을 이용해 여러 조건
            제약에서 벗어나 물건을 공유 할 수 있는 플랫폼
          </p>
          <p>React, Typescript, Zustand, FastAPI, Raspberry Pi, Arduino 사용</p>
          <p>
            서버의 작업 일정이 늦어져 별도의 Firebase 서버를 이용해 유저 채팅
            기능 구현
          </p>
          <p>
            사용자의 결제 단계를 최소화 하기 위한 Web nfc 도입 및 이를 이용한
            결제 기능구현
          </p>
          <p>
            라즈베리파이와 서버의 네트워크 대역폭이 달라 통신 문제를 시리얼
            통신을 교체 후 해결
          </p>
          <p>회원 가입 기능 구현 및 IoT 설계 및 제작</p>
        </div>
        <div className={styles.project}>
          <h5>
            Car born / 토이 프로젝트 (20.11.20 ~ 21.03.01){" "}
            <Link
              href="https://github.com/22JH/car-born-project"
              target="_blacnk"
              rel="noreferrer"
            >
              Github
            </Link>
          </h5>
          <p>
            중고차를 거래, 정비, 검사, 보험을 통합해서 이용할 수 있으며 이를
            블록체인으로 보장해 신뢰성을 높인 플랫폼
          </p>
          <p>React, Typescript, React-Redux, Redux-Saga 사용</p>
          <p>
            기업(정비,검사,보험)의각각예약조회및변경,상태등록및조회,리뷰등록기능구현
          </p>
          <p>
            사용자 메인 페이지에 React Three Fiber을 이용해 3D 모델링 렌더링
            구현
          </p>
        </div>
        <div className={styles.project}>
          <h5>
            BP / 토이 프로젝트 (20.11.20 ~ 21.03.01){" "}
            <Link
              href="https://github.com/22JH/kiosk-bp"
              target="_blacnk"
              rel="noreferrer"
            >
              Github
            </Link>
          </h5>
          <p>손쉽게우산을대여할수있는키오스크와이를이용할수있는플랫폼</p>
          <p>React, Typescript, React-Redux, Redux-Saga 사용</p>
          <p>
            지점 별 매출 및 수익 추이 조회를 테이블 형태 및 D3.js를 이용한 차트
            형태로 구현
          </p>
          <p>Bootpay를 이용해 사용자 결제 구현</p>
          <p>Gsap.js를 이용해 인터렉티브한 사용자 메인 페이지 구현</p>
        </div>
      </div>
      <div className={styles.resumeExperience}>
        <div className={styles.experience}>
          <h5>42Seoul (2022.05 ~ 2022.07)</h5>
          <p>이노베이션 아카데미 주관의 C언어만을 이용하는 부트캠프</p>
          <p>1개월 간의 테스트를 마치고 합격 후 본 과정 진행</p>
          <p>동시에 지원했던 삼성청년소프트 아카데미(SSAFY)에 합격해 퇴소</p>
        </div>
        <div className={styles.experience}>
          <h5>삼성 청년 소프트 아카데미 (2022.07 ~ 2023.06)</h5>
          <p>삼성 전자 주관의 소프트웨어 교육 아카데미</p>
          <p>실무에 가까운 프로젝트들을 수행</p>
          <p>삼성전자 수여 2회 수상</p>
        </div>
      </div>
      <div className={styles.resumeAwards}>
        <div className={styles.experience}>
          <h4>Awards</h4>
          <h5>삼성 청년 SW 아카데미 공통 프로젝트 우수상</h5>
          <p>수여기관 : 삼성전자</p>
          <p>비고 : 전체1등</p>
        </div>
        <div className={styles.experience}>
          <h5>삼성 청년 SW 아카데미 특화 프로젝트 우수상</h5>
          <p>수여 기관 : 삼성 전자</p>
          <p>비고 : 전체 3등</p>
        </div>
      </div>
      <div className={styles.resumeEducation}></div>
    </div>
  );
}
