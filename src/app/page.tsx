export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-gray-900">Ленируф</h1>
        <p className="mt-2 text-gray-700">
        Российское производство уходовой косметики
        Две сестры с нуля создают бренд парфюмированный косметики с богатым ароматом.  
        </p>

        {/* Фото */}
        <img
          src="/profile.jpg" 
          alt="Евгений Кравцов"
          className="w-64 h-64 rounded-lg mt-4"
        />

        {/* Навыки */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Расскажем немного о нас:</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Елена - профессиональный косметолог и массажист</li>
            <li>Ирина - экономист с красным дипломом, мать троих детей, с детства увлекается ароматами парфюма</li>
          </ul>
        </div>

        {/* Кнопки */}
        <div className="mt-6 flex space-x-4">
          <a
            href="https://t.me/balicosm"
            className="px-4 py-2 bg-black text-white rounded-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Наш Telegram
          </a>
          <a
            href="mailto:barki_i@mail.ru"
            className="px-4 py-2 border border-gray-800 text-gray-800 rounded-lg"
          >
            Напиши нам
          </a>
        </div>
      </div>
    </div>
  );
}
