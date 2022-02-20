import { useEffect, useState } from "react";
import MovieItem from "./MovieItem";

export default function Movie({ setLoading, loading }) {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5`)
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  const moviesInfo = movies.map((movie) => {
    const { id, title, summary, genres, medium_cover_image } = movie;
    return (
      <MovieItem
        key={id}
        id={id}
        title={title}
        summary={summary}
        genres={genres}
        img={medium_cover_image}
      />
    );
  });

  return <>{!loading && <div>{moviesInfo}</div>}</>;
}
