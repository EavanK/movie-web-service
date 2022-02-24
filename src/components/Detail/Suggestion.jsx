import { Link } from "react-router-dom";
import Poster from "../Poster";

export default function Suggestion({ id, img }) {
  return (
    <Link to={`/movie/${id}`}>
      <Poster img={img} w="100px" h="150px" o="0.8" />
    </Link>
  );
}
