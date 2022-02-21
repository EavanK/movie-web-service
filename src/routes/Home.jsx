import { useState } from "react";
import Movie from "../components/Home/Movie";

export default function Home() {
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
      <Movie loading={loading} setLoading={setLoading} />
    </div>
  );
}
