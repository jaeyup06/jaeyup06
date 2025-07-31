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
      <body className="font-pretendard antialiased grid grid-cols-[auto_1fr]">
        <Sidebar />
        <main className="relative">
          <Overlay />
          <img
            src="/banner.jpg"
            className="w-full h-full object-cover"
            alt="배너"
          />
          <div className="absolute top-0 left-0">{children}</div>
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
