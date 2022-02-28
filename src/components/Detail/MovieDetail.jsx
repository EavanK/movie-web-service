import { Link, useParams } from "react-router-dom";
import { GET_MOVIE } from "../../api";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import Poster from "../Poster";
import Suggestion from "./Suggestion";

const Container = styled.div`
  display: flex;
  justify-content: center;
  max-height: 90%;
  overflow-y: auto;
`;

const Column = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 770px) {
    width: 75%;
  }
  @media only screen and (max-width: 480px) {
    width: 90%;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 45px;
  margin: 15px 0;

  @media only screen and (max-width: 770px) {
    font-size: 35px;
  }
  @media only screen and (max-width: 480px) {
    font-size: 30px;
  }
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin: 10px 0;
  color: #b6b6b6;

  @media only screen and (max-width: 770px) {
    font-size: 28px;
  }
  @media only screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

const Description = styled.p`
  font-size: 28px;
  margin-bottom: 10px;

  @media only screen and (max-width: 770px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

const Suggestions = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  margin-top: 10px;
  width: 40%;

  @media only screen and (max-width: 770px) {
    grid-template-columns: repeat(2, 1fr);
  }
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
    variables: { id: parseInt(id) },
  });

  const parsedSuggestions = data?.suggestions?.map((s) => {
    return <Suggestion key={s.id} id={s.id} img={s.medium_cover_image} />;
  });

  return (
    <Container>
      <Column>
        <Title>
          {loading
            ? "Loading..."
            : `${data.movie.title} ${data.movie.isLiked && "❤️"}`}
        </Title>
        <Poster img={data?.movie?.medium_cover_image} h="350px" w="250px" />
        {!loading && (
          <>
            <Subtitle>
              Lang: {data.movie.language.toUpperCase()} · Rating:
              {data.movie.rating}
            </Subtitle>
            <Description>{data.movie.description_intro}</Description>
            Suggestions:
            <Suggestions>{parsedSuggestions}</Suggestions>
          </>
        )}
        <Link to={"/"}>
          <Home>&lsaquo;</Home>
        </Link>
      </Column>
    </Container>
  );
}
