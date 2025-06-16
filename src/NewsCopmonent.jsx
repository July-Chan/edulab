import './NewsComp.css';
import { useState } from "react";
import { newsData } from "./data/newsData";
import { useNavigate } from "react-router-dom";

export default function NewsComponent() {
  const [view, setView] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const navigate = useNavigate();

  const filteredAndSortedNews = newsData
    .filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "desc") return new Date(b.date) - new Date(a.date);
      return new Date(a.date) - new Date(b.date);
    });

  const totalPages = Math.ceil(filteredAndSortedNews.length / itemsPerPage);
  const paginatedNews = filteredAndSortedNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNavigate = (slug) => navigate(`/news/${slug}`);
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="news-container">

      <div className="controls">
        <input
          type="text"
          placeholder="Пошук новин..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="desc">Найновіші</option>
          <option value="asc">Найстаріші</option>
        </select>

        <div className="view-buttons">
          <button
            onClick={() => setView("grid")}
            className={view === "grid" ? "active" : ""}
          >
            <img
              src="svg/IconGrid.svg"
              alt="Сітка"
              className="view-icon"
            />
          </button>

          <button
            onClick={() => setView("list")}
            className={view === "list" ? "active" : ""}
          >
            <img
              src="svg/IconList.svg"
              alt="Список"
              className="view-icon"
            />
          </button>
        </div>
      </div>

      {view === "grid" ? (
        <div className="news-grid">
          {paginatedNews.map((item) => (
            <div
              key={item.id}
              className="news-card"
              onClick={() => handleNavigate(item.slug)}
            >
              <img src={item.image_url} alt={item.title} />
              <div className="content">
                <h2>{item.title}</h2>
                <p className="date">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="news-list">
          {paginatedNews.map((item) => (
            <div
              key={item.id}
              className="news-list-item"
              onClick={() => handleNavigate(item.slug)}
            >
              <img src={item.image_url} alt={item.title} />
              <div className="info">
                <h2>{item.title}</h2>
                <p className="date">{item.date}</p>
                <p className="description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="pagination">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="pagination-arrow"
          aria-label="Попередня сторінка"
        >
          🠜
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`pagination-number ${currentPage === i + 1 ? "active" : ""}`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="pagination-arrow"
          aria-label="Наступна сторінка"
        >
          🠞
        </button>
      </div>
    </div>
  );
}
