import { useMutation } from "@apollo/client";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LIKE_MOVIE } from "../../api";
import Poster from "../Poster";

const Container = styled.div`
  height: 400px;
  border-radius: 7px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: transparent;
  margin-bottom: 10px;
`;

const Like = styled.div`
  font-size: 30px;
  position: relative;
  top: -420px;
  left: 0px;
`;

const Button = styled.div`
  font-size: 20px;
  width: auto;
  display: flex;
  justify-content: end;
  padding: 5px;
`;

export default function MovieItem({ id, img, isLiked }) {
  const [toggleLikeMovie] = useMutation(LIKE_MOVIE, {
    variables: { id: parseInt(id), isLiked },
  });

  return (
    <>
      <Container>
        <Link to={`/movie/${id}`}>
          <Poster img={img} h="100%" w="100%" o="0.8" />
        </Link>
        <Button onClick={() => toggleLikeMovie(isLiked)}>
          {isLiked ? "Undo" : "Like 👍"}
        </Button>
        {isLiked && <Like>❤️</Like>}
      </Container>
    </>
  );
}

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  isLiked: PropTypes.bool.isRequired,
};
