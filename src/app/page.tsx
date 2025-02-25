export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-gray-900">Привет! Я Раян</h1>
        <p className="mt-2 text-gray-700">
        Люблю технологии, нестандартные задачи и запах свежесозданных проектов. 🚀 </p>

        {/* Фото */}
        <img
          src="/profile.jpg" 
          alt="Евгений Кравцов"
          className="w-32 h-32 rounded-lg mt-4"
        />

        {/* Навыки */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Что я делаю?</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Придумываю и создаю механизмы, которые двигаются, работают и упрощают жизнь. Робототехника — моя стихия.</li>
            <li>Разрабатываю сайты, которые не просто выглядят круто, а ещё и работают безупречно.</li>
          </ul>
        </div>

        {/* Стиль */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Как я работаю?</h2>
          <ul className="list-disc list-inside text-gray-700">
          <li>Беру идею → нахожу нестандартное решение → превращаю его в реальность. Будь то 3D-печатное крепление для манипулятора или стильный сайт, всё должно быть идеально!</li>
          </ul>
        </div>


        {/* Стиль */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Давай что-нибудь замутим!</h2>
          <ul className="list-disc list-inside text-gray-700">
          <p className="mt-2 text-gray-700">
          Есть идея? Пиши, обсудим. Люблю интересные проекты и креативные вызовы.</p>          
          </ul>
        </div>

        {/* Кнопки */}
        <div className="mt-6 flex space-x-4">
          <a
            href="https://t.me/rnbrk"
            className="px-4 py-2 bg-black text-white rounded-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram канал
          </a>
          <a
            href="https://t.me/nmtuiii"
            className="px-4 py-2 border border-gray-800 text-gray-800 rounded-lg"
            rel="noopener noreferrer"
          >
            Личка
          </a>
        </div>
      </div>
    </div>
  );
}
