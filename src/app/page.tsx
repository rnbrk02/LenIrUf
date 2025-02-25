export default function Home() {
  return (
<div className="flex min-h-screen items-center justify-center bg-gray-90">
  <div className="max-w-md w-full bg-white shadow-lg rounded-3xl p-4 text-center">

        {/* Заголовок по центру */}
        <h1 className="text-2xl font-bold text-gray-1000">Привет! Я Раян</h1>

        <div className="grid grid-cols-2 gap-100 items-center mt-2 text-center">
          {/* Текст слева */}
          <p className="text-gray-700">
            Люблю технологии, нестандартные задачи и запах свежесозданных проектов. 🚀
          </p>

          {/* Фото справа */}
          <img
            src="/profile.jpg"
            alt="Евгений Кравцов"
            className="w-32 h-32 rounded-lg justify-self-end"
          />
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
<div className="mt-6 flex justify-center gap-4">
  <a
    href="https://t.me/rnbrk"
    className="px-4 py-2 text-white rounded-lg"
    target="_blank"
    style={{ backgroundColor: "#01a3cf" }}
    rel="noopener noreferrer"
  >
    Telegram канал
  </a>
  <a
    href="https://t.me/nmtuiii"
    className="px-4 py-2 text-white rounded-lg"
    rel="noopener noreferrer"
    style={{ backgroundColor: "#01a3cf" }}
  >
    Напиши
  </a>
</div>
      </div>
    </div>
  );
}
