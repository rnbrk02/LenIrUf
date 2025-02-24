export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-gray-900">Евгений Кравцов</h1>
        <p className="mt-2 text-gray-700">
          Привет! Я Евгений Кравцов. Frontend-разработчик с более чем 4-летним опытом. Работал в таких компаниях как start.ru, Ozon.
        </p>

        {/* Фото */}
        <img
          src="/profile.jpg" 
          alt="Евгений Кравцов"
          className="w-32 h-32 rounded-lg mt-4"
        />

        {/* Навыки */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Навыки:</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>JavaScript, TypeScript, HTML5, CSS, SASS, PHP</li>
            <li>React.js, Next.js, Redux, WebSockets</li>
            <li>Node.js, Lodash, Webpack, Docker, Nginx</li>
          </ul>
        </div>

        {/* Кнопки */}
        <div className="mt-6 flex space-x-4">
          <a
            href="https://medium.com/@your_profile"
            className="px-4 py-2 bg-black text-white rounded-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Мой Medium
          </a>
          <a
            href="mailto:your@email.com"
            className="px-4 py-2 border border-gray-800 text-gray-800 rounded-lg"
          >
            Напиши мне
          </a>
        </div>
      </div>
    </div>
  );
}
