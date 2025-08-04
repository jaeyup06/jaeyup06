function Home() {
  return (
    <div className="flex flex-col justify-between px-[10vw] py-20 min-h-screen">
      {/* 상단 콘텐츠 */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* 텍스트 영역 */}
        <div className="flex flex-col text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-gray-800 break-keep whitespace-pre-line">
            안녕하세요, 김재엽입니다.
          </h1>
          <p className="text-lg lg:text-2xl text-gray-600 mb-6 break-words whitespace-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <br />
            Nulla voluptates pariatur error cupiditate repellat sit similique.
          </p>
          <p className="text-sm lg:text-lg text-gray-500 leading-relaxed break-words whitespace-normal">
            Optio nobis temporibus saepe ullam deleniti et quod quibusdam vel
            quam,
            <br />
            iste id maxime facere reprehenderit. Architecto deserunt magnam
            eveniet!
            <br />
            Quaerat necessitatibus atque quo voluptatibus quis rem minima odio
            error,
          </p>
        </div>

        {/* 프로필 이미지 */}
        <div className="w-40 h-40 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-lg border-3 shrink-0">
          <img
            src="/profile.jpg"
            alt="프로필"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 하단 콘텐츠 */}
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 w-full">
        <li className="w-full">
          <div className="aspect-[5/3] w-full bg-gray-400 rounded-2xl shadow-lg" />
          <p className="text-center mt-2 text-lg text-gray-700">text</p>
        </li>
        <li className="w-full">
          <div className="aspect-[5/3] w-full bg-gray-400 rounded-2xl shadow-lg" />
          <p className="text-center mt-2 text-lg text-gray-700">text</p>
        </li>
        <li className="w-full">
          <div className="aspect-[5/3] w-full bg-gray-400 rounded-2xl shadow-lg" />
          <p className="text-center mt-2 text-lg text-gray-700">text</p>
        </li>
      </ul>
    </div>
  );
}

export default Home;
