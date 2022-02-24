import { Link, useParams } from "react-router-dom";
import { GET_MOVIE } from "../../api";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import Poster from "../Poster";
import Suggestion from "./Suggestion";

const Column = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 65px;
  margin: 15px 0;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 28px;
  margin-bottom: 10px;
`;

const Suggestions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 10px;
`;

const Home = styled.div`
  position: fixed;
  top: 40px;
  left: 40px;
  width: 40px;
  height: 40px;
  font-size: 50px;
  opacity: 0.5;
  text-align: center;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  &:active {
    color: white;
  }
`;

export default function MovieDetail() {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id },
  });

  const parsedSuggestions = data?.suggestions?.map((s) => {
    return <Suggestion key={s.id} id={s.id} img={s.medium_cover_image} />;
  });

  return (
    <>
      <Column>
        <Poster
          img={data?.movie?.medium_cover_image}
          h="350px"
          w="250px"
          o="1"
        />
        <Title>{loading ? "Loading..." : data.movie.title}</Title>
        {!loading && (
          <>
            <Subtitle>
              Lang: {data.movie.language.toUpperCase()} · Rating:{" "}
              {data.movie.rating}
            </Subtitle>
            <Description>{data.movie.description_intro}</Description>
          </>
        )}
        Suggestions:
        <Suggestions>{parsedSuggestions}</Suggestions>
        <Link to={"/"}>
          <Home>&lsaquo;</Home>
        </Link>
      </Column>
    </>
  );
}
