import Movie from "../components/Home/Movie";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.header`
  background-image: linear-gradient(-45deg, #7b54d7, #3afd44);
  height: 45vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;

  @media only screen and (max-width: 480px) {
    font-size: 40px;
  }
`;
const Subtitle = styled.h3`
  font-size: 35px;
`;

const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 60%;
  position: relative;
  top: -50px;

  @media only screen and (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 770px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default function Home() {
  return (
    <Container>
      <Header>
        <Title>Movie Web Service</Title>
        <Subtitle>with GraphQL</Subtitle>
      </Header>
      <Movies>
        <Movie />
      </Movies>
    </Container>
  );
}
