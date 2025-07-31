"use client";

import { usePathname, useRouter } from "next/navigation";
import {
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
      { label: "인적사항", path: "/home/personal-info" },
      { label: "목표 · 관심사", path: "/home/goals-interests" },
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

  const goToPath = (path: string) => {
    if (pathname === path) {
      router.push("/");
    } else {
      router.push(path);
    }
  };

  const getMenuClass = (path: string) =>
    pathname.startsWith(path)
      ? "ml-6 font-bold text-white bg-gray-900 rounded px-1"
      : "ml-7 hover:text-gray-400 bg-transparent border-none cursor-pointer";

  return (
    <div className="grid h-screen w-[250px] translate-x-[0px] transition-transform duration-300">
      <div className="relative bg-gray-800 text-white flex flex-col items-center py-10">
        {/* 정보 */}
        <img
          src="/profile.jpg"
          className="w-[104px] h-[104px] rounded-full border-[3px] border-white"
          alt="프로필"
        />

        <h1 className="text-xl font-bold mt-4">김재엽</h1>
        <ul className="space-y-1 mt-2 text-gray-200 text-sm text-center">
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
                <ul className="text-sm space-y-1 text-gray-200">
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
  );
}

export default Sidebar;
