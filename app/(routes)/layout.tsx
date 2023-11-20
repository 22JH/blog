import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import BottomBar from "../components/navbars/BottomBar";
import Topbar from "../components/navbars/Topbar";
import * as styles from "./RootLayout.css";
import { darkTheme, ligthTheme } from "../styles/themes/theme.css";
import { cookies } from "next/headers";
import Footer from "../components/navbars/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  return (
    <html lang="ko-KR">
      <body className={theme?.value === "dark" ? darkTheme : ligthTheme}>
        <Topbar />
        <div className={styles.mainContentContainer}>
          <main className={styles.mainContent}>
            {children}
            <Footer />
          </main>
        </div>
        <BottomBar />
      </body>
    </html>
  );
}
