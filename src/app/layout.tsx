import type { Metadata } from "next";
import Overlay from "./(root)/_components/Overlay";
import Sidebar from "./(root)/_components/Sidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "재엽 서식지",
  description: "My portfolio",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="font-pretendard antialiased flex overflow-hidden">
        {/* 사이드바 */}
        <Sidebar />

        {/* 메인 */}
        <main className="relative flex-1 h-screen overflow-y-auto">
          {/* 배경 */}
          <div className="fixed inset-0 -z-10">
            <Overlay />
            <img
              src="/banner.jpg"
              className="w-full h-full object-cover"
              alt="배경"
            />
          </div>
          {/* 페이지 */}
          <div className="relative">{children}</div>
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
