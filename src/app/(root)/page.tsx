import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-[url('/banner.jpg')] bg-cover bg-center bg-fixed relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-slate-800/80 before:via-gray-800/80 before:to-gray-900/80 before:-z-10">
      <div className="backdrop-blur-2xl bg-white/10 border border-white/20 py-16 px-20 rounded-3xl shadow-xl flex flex-col md:flex-row items-center md:space-x-16 text-gray-100 relative z-10">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-60 h-60 rounded-full border-4 border-white/50 shadow-lg"
        />
        <div className="hidden md:block w-1 h-56 bg-white/50" />
        <div className="mt-8 md:mt-0 text-center md:text-left text-white">
          <h1 className="text-4xl font-bold mb-4">김재엽</h1>
          <ul className="text-2xl leading-relaxed">
            <li>한양대학교 ERICA · Robotics 전공</li> <li>010-0000-0000</li>
            <li>jaeyup06@hanyang.ac.kr</li>
          </ul>
          <div className="flex mt-6 space-x-8 text-4xl">
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
