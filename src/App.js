import React, { useState, useEffect, useRef } from "react";
import Gallery from './Gallery';
import WeeklyExperiments from "./WeeklyExperiments";
import Footer from './Footer';
import NewsDetail from "./NewsDetail";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Slider from "./Slider";
import NewsSection from "./MainNews";
import NewsComponent from "./NewsCopmonent";

const navItems = [
  { label: "Головна", path: "/home", element: <Home /> },
  { label: "Про сайт", path: "/about", element: <About /> },
  { label: "Галерея картинок", path: "/gallery", element: <GalleryPage /> },
  { label: "Новини", path: "/news", element: <News /> },
  { label: "Контакти", path: "/contact", element: <Contact /> },
];

function Home() { 
  const teamMembers = [
    "/svg/team1.svg",
    "/svg/team2.svg",
    "/svg/team3.svg",
    "/svg/team4.svg",
    "/svg/team5.svg",
    "/svg/team6.svg",
  ];

  return (
    <>
      <div className="pagetitle">
        <h1 className="title">Досліджуй. Експериментуй. Вивчай хімію</h1>
        <h2 className="description">Твоя освітня хімлабораторія онлайн</h2> 
      </div>
      <Slider />
      <NewsSection />
      <WeeklyExperiments />

      <section className="team-section">
        <h2 className="team-title">Наша команда</h2>
        <div className="team-grid">
          {teamMembers.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Член команди ${index + 1}`}
              className="team-member-img"
              width={430}
              height={595}
            />
          ))}
        </div>
      </section>
      
    </>
  );
}


function About() {
  return(
    <div className="about-container">
          <p>
            Вітаємо на офіційному новинному сайті нашої хімічної лабораторії! Це простір, де ми ділимось найсвіжішими оновленнями, важливими подіями, відкриттями та досягненнями у сфері хімії.
          </p>

          <h2>Що ви знайдете на цьому сайті:</h2>
          <ul>
            <li>
              <img src="./svg/icon1.svg" alt="Дослідження" className="about-icon" />
              Новини про дослідження та експерименти, що проводяться в лабораторії
            </li>
            <li>
              <img src="./svg/icon2.svg" alt="Події" className="about-icon" />
              Оголошення про майбутні події, конференції та воркшопи
            </li>
            <li>
              <img src="./svg/icon3.svg" alt="Обладнання" className="about-icon" />
              Публікації про нове обладнання та інновації
            </li>
            <li>
              <img src="./svg/icon4.svg" alt="Звіти" className="about-icon" />
              Звіти про наукову діяльність, зустрічі та внутрішні ініціативи
            </li>
            <li>
              <img src="./svg/icon5.svg" alt="Інтерв’ю" className="about-icon" />
              Інтерв’ю з дослідниками, студентами й запрошеними фахівцями
            </li>
          </ul>

          <p>
            Ми прагнемо зробити науку ближчою, цікавішою та зрозумілішою. Цей сайт створено для студентів, науковців, викладачів і всіх, хто цікавиться хімією та науковим процесом.
          </p>

          <p className="final-message">
            Залишайтеся з нами — попереду ще багато цікавого!
          </p>
    </div>
  );
}
function GalleryPage() { 
  return(
    <div >
   <Gallery/>
    </div>
   
  );
}
function News() {
  return(
     <div>
    <NewsComponent/>
     </div>
  );
 
   
}
function Contact() {
  return (

        <div className="contact-page">
          <div className="contact-content">
            <div className="contact-info">
              <p><strong>Адреса:</strong> вул. Наукова, 12, м. Полтава, Україна</p>
              <p><strong>Телефон:</strong> <a href="tel:+380501234567">+38 (050) 123-45-67</a></p>
              <p><strong>Email:</strong> <a href="mailto:info@chem-lab.com">info@chem-lab.com</a></p>
              <p><strong>Графік роботи:</strong> Пн–Пт, 9:00–18:00</p>
            </div>

            <div className="map-container">
              <iframe
                title="Google Map of our location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.712950122007!2d34.55847127689878!3d49.588267748660376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d82fd28ebfb37b%3A0x90639e8bb41fcb6b!2z0J_QvtC70YzRiNC40YfQtdC90LjQuSDQv9C-0YDQvtCz0L4g0LrQsNC80LDRgtC40LrQsA!5e0!3m2!1suk!2sua!4v1718389171807!5m2!1suk!2sua"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      );
    }

function NavMenu() {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [bgStyle, setBgStyle] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRefs = useRef([]);

useEffect(() => {
  let foundIndex = navItems.findIndex(item => item.path === location.pathname);

  if (location.pathname.startsWith("/news/")) {
    foundIndex = navItems.findIndex(item => item.path === "/news");
  }

  setActiveIndex(foundIndex !== -1 ? foundIndex : 0);
}, [location]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const activeEl = navRefs.current[activeIndex];
      if (activeEl) {
        const { offsetLeft, offsetWidth } = activeEl;
        setBgStyle({ left: offsetLeft, width: offsetWidth });
      }
    }, 50);
    return () => clearTimeout(timeout);
  }, [activeIndex]);

  return (
    <div className="nav-wrapper">
      <button className="burger-btn" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
        ☰
      </button>

      <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        {bgStyle && (
          <div className="nav-background" style={{ left: `${bgStyle.left}px`, width: `${bgStyle.width}px` }} />
        )}
        {navItems.map((item, index) => (
          <Link
            key={item.label}
            to={item.path}
            className={`nav-link ${activeIndex === index ? "active" : ""}`}
            ref={(el) => (navRefs.current[index] = el)}
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <div className="mobile-auth-buttons">
          <button className="signup">Зареєструватись</button>
          <button className="login">Увійти</button>
        </div>
      </nav>
    </div>
  );
}


export default function App() {
  return (
    <Router>
      <div className="wrapper">
        <header className="header">
          <div className="logo-block">
            <img src="/svg/Logo.svg" alt="EduLab Chemistry Logo" className="logo" />
          </div>
          <NavMenu />
          <div className="auth-buttons">
            <div className="header-box">
              <button className="signup">Зареєструватись</button>
              <button className="login">Увійти</button>
            </div>
          </div>
        </header>

        <main>
          <Routes>
            {navItems.map(item => (
              <Route key={item.path} path={item.path} element={item.element} />
            ))}

            <Route path="*" element={<Home />} />
                        <Route path="/news/:slug" element={<NewsDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
