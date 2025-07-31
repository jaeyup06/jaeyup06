import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./(root)/_components/Sidebar";

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
          <main className="h-full w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;