import { useState } from "react";
import Movie from "../components/Home/Movie";
import styles from "./Home.module.css";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div className={styles.container}>
      {loading && (
        <div className={styles.loader}>
          <span>
            <b>Loading...</b>
          </span>
        </div>
      )}
      <Movie loading={loading} setLoading={setLoading} />
    </div>
  );
}
