import { useState } from "react";
import Movie from "../components/Home/Movie";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      <Movie loading={loading} setLoading={setLoading} />
    </div>
  );
}
