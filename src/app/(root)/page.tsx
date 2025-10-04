import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-blue-50 bg-[radial-gradient(circle_at_2px_2px,_#b6d2fc_2px,_transparent_0)] [background-size:32px_32px]">
      <div className="flex flex-col md:flex-row items-center bg-white py-16 px-20 rounded-3xl shadow-lg md:space-x-16 animate-fadeIn">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-60 h-60 rounded-full border-[3px] border-gray-400"
        />
        <div className="hidden md:block w-[3px] h-56 bg-gray-400" />
        <div className="mt-8 md:mt-0 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">김재엽</h1>
          <ul className="text-2xl text-gray-700 leading-relaxed">
            <li>한양대학교 ERICA · Robotics 전공</li>
            <li>010-0000-0000</li>
            <li>jaeyup06@hanyang.ac.kr</li>
          </ul>
          <div className="flex mt-6 space-x-8 text-4xl text-gray-700">
            <a
              href="https://youtube.com/@jaeyup06"
              className="hover:opacity-70"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              href="https://github.com/jaeyup06"
              className="hover:opacity-70"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://instagram.com/jaeyup06"
              className="hover:opacity-70"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
