import PropTypes from "prop-types";

export default function MovieListItem({ title, summary, genres, img }) {
  const parsedGenres = genres.map((g, i) => <li key={i}>{g}</li>);

  return (
    <>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>{parsedGenres}</ul>
    </>
  );
}

MovieListItem.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
