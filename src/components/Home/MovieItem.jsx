import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 400px;
  border-radius: 7px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: transparent;
`;

const Poster = styled.div`
  background-image: url(${(props) => props.img});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
  border-radius: 7px;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

export default function MovieItem({ id, img }) {
  return (
    <Container>
      <Link to={`/movie/${id}`}>
        <Poster img={img} />
      </Link>
    </Container>
  );
}

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};
