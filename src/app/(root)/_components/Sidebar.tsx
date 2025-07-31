import {
  FaBriefcase,
  FaCode,
  FaGithub,
  FaHome,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

function Sidebar() {
  return (
    <main className="h-screen grid">
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
            <div>
              <li className="flex items-center gap-2 hover:text-gray-400 cursor-pointer">
                <FaHome /> Home
              </li>
              <ul className="ml-7 text-sm space-y-1 cursor-pointer">
                <li className="hover:text-gray-400">인적사항</li>
                <li className="hover:text-gray-400">목표 · 관심사</li>
                <li className="hover:text-gray-400">TMI</li>
              </ul>
            </div>
            <div>
              <li className="flex items-center gap-1 hover:text-gray-400 cursor-pointer">
                <FaCode /> Project
              </li>
              <ul className="ml-7 text-sm space-y-1 cursor-pointer">
                <li className="hover:text-gray-400">프로젝트</li>
                <li className="hover:text-gray-400">프로젝트</li>
              </ul>
            </div>
            <div>
              <li className="flex items-center gap-2 hover:text-gray-400 cursor-pointer">
                <FaBriefcase /> Career
              </li>
              <ul className="ml-7 text-sm space-y-1 cursor-pointer">
                <li className="hover:text-gray-400">대외 활동</li>
                <li className="hover:text-gray-400">수상</li>
                <li className="hover:text-gray-400">자격증</li>
              </ul>
            </div>
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
    </main>
  );
}

export default Sidebar;
