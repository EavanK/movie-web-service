import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function MovieDetail({ loading, setLoading }) {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  const parsedGenres = movie.genres?.map((g, i) => <li key={i}>{g}</li>);

  return (
    <>
      {!loading && (
        <>
          <h1>{movie.title}</h1>
          <h3>Rating: {movie.rating}</h3>
          <img src={movie.medium_cover_image} alt={movie.title} />
          <p>{movie.description_full}</p>
          <ul>{parsedGenres}</ul>
          <small>{movie.date_uploaded}</small>
          <br />
          <Link to="/">Home</Link>
        </>
      )}
    </>
  );
}
