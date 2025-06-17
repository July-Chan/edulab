import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-desc">
          <img src="/svg/Logo.svg" alt="EduLab Chemistry Logo" className="footer-logo" />
          <p className="footer-desc">Хімія — просто, цікаво, доступно!</p>
        </div>
        <nav className="footer-nav">
          <h3>Навігація</h3>
          <ul>
            <li><a href="/home">Головна</a></li>
            <li><a href="/about">Про сайт</a></li>
            <li><a href="/news">Новини</a></li>
            <li><a href="/gallery">Галерея картино</a></li>
            <li><a href="/contact">Контакти</a></li>
          </ul>
        </nav>
        <div className="footer-contact">
          <h3>Контакти</h3>
          <p>Email: <a href="mailto:info@chem-lab.com">info@chem-lab.com</a></p>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>
      </div>
      <div className="footer-copy">
        © 2025 EduLab Chemistry. Всі права захищено.
      </div>
    </footer>
  );
}
