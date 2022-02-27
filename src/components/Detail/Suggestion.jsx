import { Link } from "react-router-dom";
import Poster from "../Poster";
import PropTypes from "prop-types";

export default function Suggestion({ id, img }) {
  return (
    <Link to={`/movie/${id}`}>
      <Poster img={img} w="100px" h="150px" o="0.8" />
    </Link>
  );
}

Suggestion.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};
