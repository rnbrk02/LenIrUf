"use client";

import { useState } from "react";

const facts = [
  "💻 Баги? Это просто фичи в бета-версии!",
  "😴 Программисты не спят, они компилируются.",
  "⚠️ Не работает? Перезапусти. Всё ещё не работает? Форматни диск.",
  "🔍 90% работы программиста — искать ошибку, 10% — создавать новую.",
  "🤖 Автоматизация: тратить 10 часов, чтобы сэкономить 10 минут.",
  "📢 Мат — основной язык отладки.",
  "🐛 Один фикс – три новых бага!",
  "🚀 Работает? Не трогай!",
  "🤷‍♂️ Почему не работает? Вчера работало!",
  "⌨️ Ctrl+C, Ctrl+V – главное оружие разработчика."
];

export default function Home() {
  const [fact, setFact] = useState("");

  const getRandomFact = () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    setFact(""); // Очищаем текст перед началом печати
    let i = 0;
    let newFact = ""; // Создаем строку локально, а не через setFact

    const interval = setInterval(() => {
      newFact += randomFact[i]; // Добавляем букву
      setFact(newFact); // Устанавливаем полностью собранный текст
      i++;
      if (i === randomFact.length) {
        clearInterval(interval);
      }
    }, 50);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-90">
      <div className="max-w-md w-full bg-white shadow-lg rounded-3xl p-4 text-center">
        {/* Заголовок */}
        <h1 className="text-2xl font-bold text-gray-1000">Привет! Я Раян</h1>

        <div className="grid grid-cols-2 gap-4 items-center mt-2 text-center">
          <p className="text-gray-700">
            Люблю технологии, нестандартные задачи и запах свежесозданных проектов. 🚀
          </p>

          <img src="/profile.jpg" alt="Раян" className="w-32 h-32 rounded-lg justify-self-end" />
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-semibold">Давай что-нибудь замутим!</h2>
          <p className="mt-2 text-gray-700">
            Есть идея? Пиши, обсудим. Люблю интересные проекты и креативные вызовы.
          </p>
        </div>

        {/* Кнопки */}
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="https://t.me/rnbrk"
            className="px-4 py-2 text-white rounded-lg transform transition-transform duration-200 hover:scale-105 hover:bg-[#018fb0] hover:shadow-lg"
            target="_blank"
            style={{ backgroundColor: "#01a3cf" }}
            rel="noopener noreferrer"
          >
            Telegram канал
          </a>
          <a
            href="https://t.me/nmtuiii"
            className="px-4 py-2 text-white rounded-lg transform transition-transform duration-200 hover:scale-105 hover:bg-[#018fb0] hover:shadow-lg"
            rel="noopener noreferrer"
            style={{ backgroundColor: "#01a3cf" }}
          >
            Напиши
          </a>
        </div>

        {/* Кнопка "Смешной факт о животном" */}
        <div className="flex flex-col items-center mt-6">
          <button
            onClick={getRandomFact}
            style={{ backgroundColor: "#01a3cf" }}
            className="px-4 py-2 text-white rounded-lg transform transition-transform duration-200 active:scale-95 hover:scale-105"
          >
            Расскажи смешной факт 🕹️
          </button>
          <p className="mt-4 text-lg font-semibold text-center h-10">
            {fact || "Нажми на кнопку, чтобы узнать факт!"}
          </p>
        </div>
      </div>
    </div>
  );
}
