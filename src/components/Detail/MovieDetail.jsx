import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./MovieDetail.module.css";

export default function MovieDetail({ loading, setLoading }) {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  const handleClick = () => {
    navigate("/");
  };

  useEffect(() => {
    getMovie();
  }, []);

  const parsedGenres = movie.genres?.map((g, i) => <li key={i}>{g}</li>);

  return (
    <>
      {!loading && (
        <>
          <div className={styles.movie}>
            <img
              className={styles.movie__background}
              src={movie.background_image_original}
              alt={movie.title}
            />

            <div className={styles.front}>
              <h1 className={styles.movie__title}>{movie.title}</h1>
              <img
                className={styles.movie__img}
                src={movie.medium_cover_image}
                alt={movie.title}
              />
              <span className={styles.movie__year}>
                <b>Released in &rsaquo; </b>
                {movie.year}
              </span>
              {movie.runtime !== 0 ? (
                <span className={styles.movie__runtime}>
                  <b>Runtime &rsaquo; </b>
                  {movie.runtime} mins
                </span>
              ) : (
                <br />
              )}
              <span className={styles.movie__rating}>
                <b>Rating &rsaquo; </b>
                {movie.rating}
              </span>
              <p className={styles.movie__description}>
                <span>
                  <b>Discription &rsaquo;</b>
                  <br />
                </span>
                {movie.description_full}
              </p>
              <ul className={styles.movie__genres}>
                <p>Genres &rsaquo;&rsaquo; </p>
                {parsedGenres}
              </ul>
              <small className={styles.movie__upload}>
                <b>Uploaded at: </b>
                {movie.date_uploaded}
              </small>
              {/* <Link to="/">Home</Link> */}
            </div>
            <button className={styles.home} type="button" onClick={handleClick}>
              &lsaquo;
            </button>
          </div>
        </>
      )}
    </>
  );
}
