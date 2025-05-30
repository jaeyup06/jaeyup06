import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "재엽 서식지",
  description: "My portfolio",
};

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className={"font-pretendard antialiased"}>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;