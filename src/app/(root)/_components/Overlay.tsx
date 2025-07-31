"use client";

import { usePathname } from "next/navigation";

export default function Overlay() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-70" />
  );
}
