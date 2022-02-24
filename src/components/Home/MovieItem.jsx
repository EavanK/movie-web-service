import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Poster from "../Poster";

const Container = styled.div`
  height: 400px;
  border-radius: 7px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: transparent;
`;

export default function MovieItem({ id, img }) {
  return (
    <Container>
      <Link to={`/movie/${id}`}>
        <Poster img={img} h="100%" w="100%" o="0.8" />
      </Link>
    </Container>
  );
}

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};
