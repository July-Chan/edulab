import React from "react";

export default function NewsSection() {
  return (
    <section className="news-section">
      <h2 className="news-title">Останні новини</h2>
      <div className="news-list">
        <div className="news-item">
          <div className="news-text">
            <h3 className="news-heading">Відкриття нового розділу</h3>
            <p className="news-description">Ми запустили розділ про органічну хімію з інтерактивними модулями. Тепер ви зможете не лише читати теорію, а й виконувати практичні завдання, переглядати відео-лекції та брати участь у віртуальних експериментах. Це допоможе краще зрозуміти складні концепції та закохатися в хімію ще більше!</p>
            <button className="news-button">Дізнатись більше</button>
          </div>
          <div className="news-image-container">
            <img className="news-image" src="/img/laboratory.jpg" alt="Новина 1" />
          </div>
        </div>

        <div className="news-item">
          <div className="news-text">
            <h3 className="news-heading">Онлайн-вебінар</h3>
            <p className="news-description">Запрошуємо на вебінар про безпечні експерименти вдома для школярів. Під час заходу наші експерти продемонструють прості та цікаві хімічні досліди, які можна виконувати без спеціального обладнання та небезпечних речовин. Ви дізнаєтеся, як проводити експерименти безпечно, а також отримаєте відповіді на всі ваші питання в реальному часі. Приєднуйтесь, щоб зробити навчання веселим і пізнавальним!</p>
            <button className="news-button">Дізнатись більше</button>
          </div>
          <div className="news-image-container">
            <img className="news-image" src="/img/forstudent.jpg" alt="Новина 2" />
          </div>
        </div>

        <div className="news-item">
          <div className="news-text">
            <h3 className="news-heading">Оновлення дизайну</h3>
            <p className="news-description">Ми оновили інтерфейс, щоб зробити користування ще зручнішим. Тепер навігація стала інтуїтивнішою, а візуальні елементи — більш сучасними і приємними для ока. Ми врахували ваші побажання та відгуки, щоб створити комфортне середовище для навчання та роботи. Оцініть новий стиль і зручність самі!</p>
            <button className="news-button">Дізнатись більше</button>
          </div>
          <div className="news-image-container">
            <img className="news-image" src="/img/interface.jpg" alt="Новина 3" />
          </div>
        </div>
      </div>

      <div className="view-all">
        <a href="/news">Дивитись всі...</a>
      </div>
    </section>
  );
}
