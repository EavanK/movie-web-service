import { useState } from "react";
import MovieDetail from "../components/Detail/MovieDetail";

export default function Detail() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="container">
      {loading && (
        <div className="loader">
          <span>
            <b>Loading...</b>
          </span>
        </div>
      )}
      <MovieDetail loading={loading} setLoading={setLoading} />
    </div>
  );
}
