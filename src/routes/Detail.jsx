import { useState } from "react";
import MovieDetail from "../components/Detail/MovieDetail";

export default function Detail() {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      <MovieDetail loading={loading} setLoading={setLoading} />
    </div>
  );
}
