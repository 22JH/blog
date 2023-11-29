import type { Metadata } from "next";
import "../globals.css";
import BottomBar from "../components/navbars/BottomBar";
import Topbar from "../components/navbars/Topbar";
import * as styles from "./RootLayout.css";
import Footer from "../components/navbars/Footer";
import ThemeProvider from "../components/home/ThemeProvider";

export const metadata: Metadata = {
  title: "Joo",
  description: "이주형의 개발 블로그",
  keywords: ["개발 블로그", "프론트엔드", "프론트엔드 블로그"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko-KR">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>
        <ThemeProvider>
          <Topbar />
          <div className={styles.mainContentContainer}>
            <main className={styles.mainContent}>
              {children}
              <Footer />
            </main>
          </div>
          <BottomBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
