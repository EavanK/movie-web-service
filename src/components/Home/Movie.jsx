import MovieItem from "./MovieItem";
import { GET_MOVIES } from "../../api";
import { useQuery } from "@apollo/client";
import styled from "styled-components";

const Loading = styled.div`
  grid-column: 1 / 5;
  font-size: 20px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 60px;
  text-align: center;
`;

export default function Movie() {
  const { loading, err, data } = useQuery(GET_MOVIES);

  if (loading) return <Loading>Loading...</Loading>;
  if (err) return <p>{`Error: ${err}`}</p>;

  return data?.movies?.map((movie) => {
    const { id, medium_cover_image, title } = movie;
    return (
      <MovieItem key={id} id={id} img={medium_cover_image} title={title} />
    );
  });
}
