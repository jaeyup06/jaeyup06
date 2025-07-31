"use client";

import { usePathname } from "next/navigation";

function Overlay() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <div className="absolute w-full h-full bg-white bg-opacity-70" />
  );
}

export default Overlay;