import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-[url('/banner.jpg')] bg-cover bg-center h-screen w-screen overflow-hidden">
      <div
        className="backdrop-blur-2xl bg-white/10 border border-white/20 items-center py-16 px-16 rounded-3xl shadow-xl flex flex-col lg:flex-row lg:space-x-16 text-gray-100
                   max-sm:scale-[0.75]"
      >
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-60 h-60 rounded-full border-4 border-white/50 shadow-lg"
        />
        <div className="w-1 h-56 bg-white/50 hidden lg:block" />
        <div className="mt-8 lg:mt-0 text-center lg:text-left text-white">
          <h1 className="text-4xl font-bold mb-4">김재엽</h1>
          <ul className="text-2xl leading-relaxed whitespace-nowrap">
            <li>한양대학교 ERICA · Robotics 전공</li>
            <li>010-0000-0000</li>
            <li>jaeyup06@hanyang.ac.kr</li>
          </ul>
          <div className="flex mt-10 lg:mt-6 space-x-14 lg:space-x-8 text-6xl lg:text-4xl justify-center lg:justify-start">
            <a
              href="https://youtube.com/@jaeyup06"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaYoutube />
            </a>
            <a
              href="https://github.com/jaeyup06"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaGithub />
            </a>
            <a
              href="https://instagram.com/jaeyup06"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
