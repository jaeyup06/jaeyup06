"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  FaBars,
  FaBriefcase,
  FaCode,
  FaGithub,
  FaHome,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const menuItems = [
  {
    label: "Home",
    icon: FaHome,
    children: [
      { label: "자기소개", path: "/home/about" },
      { label: "관심사 · 목표", path: "/home/interests-goals" },
      { label: "TMI", path: "/home/tmi" },
    ],
  },
  {
    label: "Project",
    icon: FaCode,
    children: [
      { label: "개인 프로젝트", path: "/project/personal-project" },
      { label: "팀 프로젝트", path: "/project/team-project" },
    ],
  },
  {
    label: "Career",
    icon: FaBriefcase,
    children: [
      { label: "대외 활동", path: "/career/activities" },
      { label: "수상", path: "/career/awards" },
      { label: "자격증", path: "/career/certificates" },
    ],
  },
];

function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const goToPath = (path: string) => {
    if (pathname === path) {
      router.push("/");
    } else {
      router.push(path);
    }
  };

  const getMenuClass = (path: string) =>
    pathname.startsWith(path)
      ? "font-bold text-white bg-gray-900 rounded px-1"
      : "mx-1 hover:text-gray-400 bg-transparent border-none";

  return (
    <div
      className={`overflow-hidden transition-all duration-300 bg-gray-800 text-white h-screen flex ${
        isOpen ? "w-[250px]" : "w-[58px]"
      }`}
    >
      {isOpen ? (
        // 사이드바 자세히
        <div className="grid w-full">
          <div className="flex flex-col items-center py-10 px-[27px]">
            {/* 토글 */}
            <button
              onClick={toggleSidebar}
              className="absolute top-4 left-4 text-2xl hover:text-gray-400"
              aria-label="사이드바 간략히"
            >
              <FaBars />
            </button>

            {/* 정보 */}
            <img
              src="/profile.jpg"
              className="w-[104px] h-[104px] rounded-full border-[3px] border-white"
              alt="프로필"
            />
            <h1 className="text-xl font-bold mt-4">김재엽</h1>
            <ul className="space-y-1 mt-2 text-gray-200 text-sm text-center whitespace-nowrap">
              <li>한양대학교 ERICA · Robotics 전공</li>
              <li>010-0000-0000</li>
              <li>jaeyup06@hanyang.ac.kr</li>
            </ul>

            {/* 메뉴 */}
            <div className="flex-grow flex items-center w-28">
              <ul className="text-xl text-white space-y-4">
                {menuItems.map(({ label, icon: Icon, children }) => (
                  <div key={label}>
                    <li className="flex items-center gap-2">
                      <Icon />
                      {label}
                    </li>
                    {/* 하위 메뉴 */}
                    <ul className="text-sm space-y-1 text-gray-200 pl-6">
                      {children.map(({ label: childLabel, path }) => (
                        <li key={path}>
                          <button
                            onClick={() => goToPath(path)}
                            className={getMenuClass(path)}
                          >
                            {childLabel}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </ul>
            </div>

            {/* SNS */}
            <div className="flex gap-8 text-white text-4xl items-center">
              <a
                href="https://github.com/jaeyup06"
                target="_blank"
                aria-label="GitHub"
                className="hover:text-gray-400"
              >
                <FaGithub />
              </a>
              <a
                href="https://instagram.com/jaeyup06"
                target="_blank"
                aria-label="Instagram"
                className="hover:text-gray-400"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com/@jaeyup06"
                target="_blank"
                aria-label="YouTube"
                className="hover:text-gray-400"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      ) : (
        // 사이드바 간략히
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col justify-between items-center h-full w-full pt-16 pb-8">
            {/* 토글 */}
            <button
              onClick={toggleSidebar}
              className="absolute top-4 left-4 text-2xl hover:text-gray-400"
              aria-label="사이드바 자세히"
            >
              <FaBars />
            </button>

            {/* 정보 */}
            <img
              src="/profile.jpg"
              className="w-[36px] h-[36px] rounded-full border-[2px] border-white"
              alt="프로필"
            />

            {/* 메뉴 */}
            <div className="flex flex-col gap-10 items-center relative">
              {menuItems.map(({ icon: Icon, label, children }) => (
                <div
                  key={label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <div className="absolute left-0 top-0 h-full w-[30px]" />

                  <button
                    className="text-2xl relative leading-none flex hover:text-gray-400"
                    aria-label={label}
                  >
                    <Icon className="transition-colors duration-200" />
                  </button>

                  {/* 하위 메뉴 */}
                  {openMenu === label && (
                    <div className="absolute left-[30px] top-1/2 -translate-y-1/2 bg-gray-700 p-2 rounded shadow-md flex flex-col gap-1 z-50 text-sm text-white whitespace-nowrap">
                      {children.map(({ label: childLabel, path }) => (
                        <span key={path}>
                          <button
                            onClick={() => goToPath(path)}
                            className={`${getMenuClass(path)} text-left`}
                          >
                            {childLabel}
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* SNS */}
            <div className="flex flex-col gap-10 items-center text-2xl">
              <a
                href="https://github.com/jaeyup06"
                target="_blank"
                aria-label="GitHub"
                className="hover:text-gray-400"
              >
                <FaGithub />
              </a>
              <a
                href="https://instagram.com/jaeyup06"
                target="_blank"
                aria-label="Instagram"
                className="hover:text-gray-400"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com/@jaeyup06"
                target="_blank"
                aria-label="YouTube"
                className="hover:text-gray-400"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;