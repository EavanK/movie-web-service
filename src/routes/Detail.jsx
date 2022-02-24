import MovieDetail from "../components/Detail/MovieDetail";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  padding: 0 80px;
`;

export default function Detail() {
  return (
    <Container>
      <MovieDetail />
    </Container>
  );
}
