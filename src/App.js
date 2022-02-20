import Detail from "./routes/Detail";
import Home from "./routes/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const { PUBLIC_URL } = process.env;

  return (
    <Router basename={PUBLIC_URL}>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/movie/:id"} element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
