import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import styles from "./MovieItem.module.css";

export default function MovieItem({ id, year, title, summary, genres, img }) {
  const parsedGenres = genres.map((g, i) => <li key={i}>{g}</li>);
  const navigate = useNavigate();

  return (
    <div className={styles.movie} onClick={() => navigate(`/movie/${id}`)}>
      <img className={styles.movie__img} src={img} alt={title} />
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movie__year}>{year}</h3>
        <p className={styles.movie__description}>
          {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
        </p>
        <ul className={styles.movie__genres}>{parsedGenres}</ul>
      </div>
    </div>
  );
}

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
