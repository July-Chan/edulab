import React, { useState } from "react";

const experiments = [
  {
    id: 1,
    title: "Визначення коефіцієнта теплопровідності матеріалів",
    description: "Дослідження теплового потоку через зразки різних матеріалів (метал, скло, пластик) для визначення їх коефіцієнта теплопровідності за допомогою термопар та спеціального калориметра. Експеримент дозволяє проаналізувати теплоізоляційні властивості та застосовність матеріалів у будівництві і промисловості. ",
    img: "/img/exp1.jpg",
  },
  {
    id: 2,
    title: "Оптичне дослідження спектра випромінювання газового розряду",
    description: "Вивчення спектральних ліній випромінювання водню, неону та інших газів у розрядній трубці. Визначення довжин хвиль за допомогою спектрометра та аналіз електронних переходів у атомах. Цей експеримент є основою для розуміння квантової механіки та спектроскопії.",
    img: "/img/exp2.jpg",
  },
  {
    id: 3,
    title: "Вивчення в'язкості рідини методом Стокса",
    description: "Визначення динамічної в’язкості рідини шляхом спостереження за швидкістю падіння сферичних тіл у рідині та застосування закону Стокса. Експеримент дає можливість дослідити властивості різних рідин, включно з полімерними розчинами.",
    img: "/img/exp3.jpg",
  },
  {
    id: 4,
    title: "Дослідження фотоефекту і визначення стала Планка",
    description: "Вимірювання фотоструму, який виникає на фотокатоді при опроміненні світлом різної довжини хвиль. Експеримент дозволяє підтвердити квантову природу світла та розрахувати стала Планка.",
    img: "/img/exp4.jpg",
  },
  {
    id: 5,
    title: "Вивчення стабільності механічних коливань системи Гармонічного осцилятора",
    description: "Аналіз динаміки пружинного маятника із різними параметрами (масою, жорсткістю пружини, амплітудою коливань). Визначення впливу демпфування і зовнішніх сил на стабільність коливальної системи. Експеримент служить базою для вивчення коливальних процесів у фізиці та інженерії.",
    img: "/img/exp5.jpg",
  },
];

export default function WeeklyExperiments() {
    const [activeId, setActiveId] = useState(null);

  return (
    <section className="weekly-experiments">
      <h2 className="section-title">Експерименти тижня</h2>
      <div className="experiments-list">
        {experiments.map((exp) => {
          const isActive = activeId === exp.id;
          const isCenter = exp.id === 3;

          const sizeClass = isCenter ? "exp-center" : "exp-side";
          const clippedClass =
            exp.id === 1 ? "clip-left" : exp.id === 5 ? "clip-right" : "";

          return (
            <div className="experiment-wrapper" key={exp.id}>
                <div
                    className={`experiment-item ${sizeClass} ${clippedClass} ${
                    isActive ? "active" : ""
                    }`}
                    onClick={() => setActiveId(exp.id)}
                >
                    <div className="image-wrapper">
                        <img
                            src={exp.img}
                            alt={exp.title}
                            className="experiment-image"
                        />
                        {isActive && (
                            <div className="overlay">
                            <p className="description-text">{exp.description}</p>
                            </div>
                        )}
                    </div>
                </div>
                <h3 className="experiment-title">{exp.title}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
