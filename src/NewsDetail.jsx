import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function NewsDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/news/${slug}`)
      .then(res => {
        if (!res.ok) throw new Error("Новина не знайдена");
        return res.json();
      })
      .then(data => {
        if (!data || Object.keys(data).length === 0) {
          throw new Error("Новина не знайдена");
        }
        setNews(data);
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <p>Завантаження...</p>;
  if (error) return <p>Помилка: {error}</p>;
  if (!news) return <p>Новина не знайдена.</p>;

  return (
    <div className="news-detail">
      <button onClick={() => navigate(-1)} className="back-button">
         Назад до новин
      </button>
      <h1>{news.title}</h1>
      <p className="date">{news.date}</p>
      <img src={news.image_url} alt={news.title} />
      <p>{news.description}</p>
    </div>
  );
}
