import { useState } from "react";
import MovieList from "./components/MovieList";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading ? <h1>Loading...</h1> : null}
      <MovieList loading={loading} setLoading={setLoading} />
    </div>
  );
}

export default App;
