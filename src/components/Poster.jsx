import styled from "styled-components";
import PropTypes from "prop-types";

const StyledPoster = styled.div`
  background-image: url(${(props) => props.img});
  min-height: ${(props) => props.h};
  min-width: ${(props) => props.w};
  background-size: cover;
  background-position: center center;
  border-radius: 7px;
  opacity: ${(props) => props.o || 1};
  align-self: center;
  position: relative;
  &:hover {
    opacity: 1;
  }
`;

export default function Poster({ img, h, w, o }) {
  return (
    <>
      <StyledPoster img={img} h={h} w={w} o={o} />
    </>
  );
}

Poster.propTypes = {
  img: PropTypes.string,
  h: PropTypes.string.isRequired,
  w: PropTypes.string.isRequired,
  o: PropTypes.string,
};
