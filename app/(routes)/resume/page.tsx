import Link from "next/link";
import * as styles from "./resume.css";
import LinkBtn from "@/app/components/svg/resume/LinkBtn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "주니어 프론트엔드 개발자",
  description: "주니어 프론트엔드 개발자 이주형 입니다.",
};

export default function Resume() {
  return (
    <div className={styles.resumeContainer}>
      <div>
        <h2 className={styles.resumeTitle}>이주형 Frontend Engineer</h2>
        <div className={styles.linkBtnFrame}>
          <Link
            href="https://docs.google.com/document/d/e/2PACX-1vSEGJBXUn5DrAgWazJXEkhSO3CfjcbWAugcdUMLgeuhWg_wDtdUFBNQZJM-eptqIMi6qSO20ke4mZkQ/pub"
            target="_blacnk"
            rel="noreferrer"
            className={styles.linkBtn}
          >
            <LinkBtn />
            Docs로 보기
          </Link>
          <Link
            href="https://toitoii080.notion.site/profile-7efbe046d0534835ba52b4909b9182b3?pvs=4"
            target="_blacnk"
            rel="noreferrer"
            className={styles.linkBtn}
          >
            <LinkBtn />
            포트폴리오(Notion)
          </Link>
        </div>
      </div>
      <div>
        <h4 className={styles.resumeSubTitle}>About</h4>
        <p className={styles.resumeText}>
          Typescript와 ReactJS, NextJS로 웹 개발을 하고있습니다.
        </p>
        <p className={styles.resumeText}>
          총 1800시간의 교육을 이수했으며 5개의 팀프로젝트를 경험이 있습니다.
        </p>
        <p className={styles.resumeText}>
          문제의 원인을 파악하고 해결하는 것을 즐깁니다.
        </p>
      </div>
      <div>
        <h4 className={styles.resumeSubTitle}>Careers</h4>
        <h5 className={styles.resumeAccent}>
          수잇(Suit) / Software Engineer (2023.07 ~ 12월 퇴사 예정){" "}
        </h5>
        <p className={styles.resumeText}>셀프 헤어스타일링을 위한 키오스크</p>
        <p className={styles.resumeText}>웹 기반 키오스크 제작</p>
        <p className={styles.resumeText}>Frontend, CI/CD, IoT 담당</p>
        <p className={styles.resumeText}>React, Typescript 기반</p>
        <p className={styles.resumeText}>Van(KIS)사와 MOU 유도 및 진행</p>
        <p className={styles.resumeText}>
          기존의 바닐라 자바스크립트 리더기 SDK를 React, Tyescript로
          마이그레이션
        </p>
        <p className={styles.resumeText}>유저 결제기능 및 사용기능 구현</p>
        <p className={styles.resumeText}>
          어드민 매출 테이블 형태로 조회 및 엑셀 파일 추출 기능 구현
        </p>
        <p className={styles.resumeText}>AWS에 nginx와 docker을 이용해 배포</p>
        <p className={styles.resumeText}>
          Jenkins와 Docker를 이용해 자동 배포 구축
        </p>
      </div>
      <div>
        <h4 className={styles.resumeSubTitle}>Projects</h4>
        <div>
          <h5 className={styles.resumeAccent}>
            공유사이 / 토이 프로젝트 (22.04.29 ~ 21.05.22){" "}
            <Link
              href="https://github.com/22JH/share42"
              target="_blacnk"
              rel="noreferrer"
            >
              Github
            </Link>
          </h5>
          <p className={styles.resumeText}>
            Web nfc와 라즈베리파이, 아두이노로 제작한 사물함을 이용해 여러 조건
            제약에서 벗어나 물건을 공유 할 수 있는 플랫폼
          </p>
          <p className={styles.resumeText}>
            React, Typescript, Zustand, FastAPI, Raspberry Pi, Arduino 사용
          </p>
          <p className={styles.resumeText}>
            서버의 작업 일정이 늦어져 별도의 Firebase 서버를 이용해 유저 채팅
            기능 구현
          </p>
          <p className={styles.resumeText}>
            사용자의 결제 단계를 최소화 하기 위한 Web nfc 도입 및 이를 이용한
            결제 기능구현
          </p>
          <p className={styles.resumeText}>
            라즈베리파이와 서버의 네트워크 대역폭이 달라 통신 문제를 시리얼
            통신을 교체 후 해결
          </p>
          <p className={styles.resumeText}>
            회원 가입 기능 구현 및 IoT 설계 및 제작
          </p>
        </div>
        <div>
          <h5 className={styles.resumeAccent}>
            Car born / 토이 프로젝트 (20.11.20 ~ 21.03.01){" "}
            <Link
              href="https://github.com/22JH/car-born-project"
              target="_blacnk"
              rel="noreferrer"
            >
              Github
            </Link>
          </h5>
          <p className={styles.resumeText}>
            중고차를 거래, 정비, 검사, 보험을 통합해서 이용할 수 있으며 이를
            블록체인으로 보장해 신뢰성을 높인 플랫폼
          </p>
          <p className={styles.resumeText}>
            React, Typescript, React-Redux, Redux-Saga 사용
          </p>
          <p className={styles.resumeText}>
            기업(정비,검사,보험)의각각예약조회및변경,상태등록및조회,리뷰등록기능구현
          </p>
          <p className={styles.resumeText}>
            사용자 메인 페이지에 React Three Fiber을 이용해 3D 모델링 렌더링
            구현
          </p>
        </div>
        <div>
          <h5 className={styles.resumeAccent}>
            BP / 토이 프로젝트 (20.11.20 ~ 21.03.01){" "}
            <Link
              href="https://github.com/22JH/kiosk-bp"
              target="_blacnk"
              rel="noreferrer"
            >
              Github
            </Link>
          </h5>
          <p className={styles.resumeText}>
            손쉽게우산을대여할수있는키오스크와이를이용할수있는플랫폼
          </p>
          <p className={styles.resumeText}>
            React, Typescript, React-Redux, Redux-Saga 사용
          </p>
          <p className={styles.resumeText}>
            지점 별 매출 및 수익 추이 조회를 테이블 형태 및 D3.js를 이용한 차트
            형태로 구현
          </p>
          <p className={styles.resumeText}>Bootpay를 이용해 사용자 결제 구현</p>
          <p className={styles.resumeText}>
            Gsap.js를 이용해 인터렉티브한 사용자 메인 페이지 구현
          </p>
        </div>
      </div>
      <div>
        <div>
          <h5 className={styles.resumeAccent}>42Seoul (2022.05 ~ 2022.07)</h5>
          <p className={styles.resumeText}>
            이노베이션 아카데미 주관의 C언어만을 이용하는 부트캠프, 250시간 교육
            이수
          </p>
          <p className={styles.resumeText}>
            1개월 간의 테스트를 마치고 합격 후 본 과정 진행
          </p>
          <p className={styles.resumeText}>
            동시에 지원했던 삼성청년소프트 아카데미(SSAFY)에 합격 후 퇴소
          </p>
        </div>
      </div>
      <div>
        <div>
          <h4 className={styles.resumeSubTitle}>Experience</h4>
          <h5 className={styles.resumeAccent}>
            삼성 청년 소프트 아카데미 (2022.07 ~ 2023.06)
          </h5>
          <p className={styles.resumeText}>
            삼성 전자 주관의 소프트웨어 교육 아카데미, 1600시간 교육 이수
          </p>
          <p className={styles.resumeText}>실무에 가까운 프로젝트들을 수행</p>
          <p className={styles.resumeText}>삼성전자 수여 2회 수상</p>
        </div>
      </div>
      <div>
        <div>
          <h4 className={styles.resumeSubTitle}>Awards</h4>
          <h5 className={styles.resumeAccent}>
            삼성 청년 SW 아카데미 공통 프로젝트 우수상
          </h5>
          <p className={styles.resumeText}>수여기관 : 삼성전자</p>
          <p className={styles.resumeText}>비고 : 전체1등</p>
        </div>
        <div>
          <h5 className={styles.resumeAccent}>
            삼성 청년 SW 아카데미 특화 프로젝트 우수상
          </h5>
          <p className={styles.resumeText}>수여 기관 : 삼성 전자</p>
          <p className={styles.resumeText}>비고 : 전체 3등</p>
        </div>
      </div>
    </div>
  );
}
