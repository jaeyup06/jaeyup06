import type { Metadata } from "next";
import Sidebar from "./(root)/_components/Sidebar";
import Overlay from "./(root)/_components/Overlay";
import "./globals.css";

export const metadata: Metadata = {
  title: "재엽 서식지",
  description: "My portfolio",
};

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className="font-pretendard antialiased">
        <div className="h-screen grid grid-cols-[250px_1fr]">
          <Sidebar />
          <main className="w-full h-screen relative">
            <Overlay /> {/* 조건부 렌더링 */}
            <img
              src="/banner.jpg"
              className="w-full h-full object-cover"
              alt="배너"
            />
            <div className="absolute top-0 left-0 w-full h-full">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
