import styled from "styled-components";

const StyledPoster = styled.div`
  background-image: url(${(props) => props.img});
  height: ${(props) => props.h};
  width: ${(props) => props.w};
  background-size: cover;
  background-position: center center;
  border-radius: 7px;
  opacity: ${(props) => props.o};
  align-self: center;
  &:hover {
    opacity: 1;
  }
`;

export default function Poster({ img, h, w, o }) {
  return <StyledPoster img={img} h={h} w={w} o={o} />;
}
