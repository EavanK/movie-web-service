import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function MovieItem({ id, title, summary, genres, img }) {
  const parsedGenres = genres.map((g, i) => <li key={i}>{g}</li>);

  return (
    <>
      <img src={img} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>{parsedGenres}</ul>
    </>
  );
}

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
