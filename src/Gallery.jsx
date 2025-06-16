import React, { useState } from "react";
import galleryData from "./data/galleryData.js";

const ITEMS_PER_PAGE = 40;

export default function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(galleryData.length / ITEMS_PER_PAGE);

  const currentItems = galleryData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {currentItems.map(({ id, image_url }) => (
          <img
            key={id}
            src={image_url}
            alt={`Gallery item ${id}`}
            className="gallery-image"
          />
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="pagination-arrow"
          aria-label="Попередня сторінка"
        >
          🠜
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            onClick={() => goToPage(i + 1)}
            className={`pagination-number ${
              currentPage === i + 1 ? "active" : ""
            }`}
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
