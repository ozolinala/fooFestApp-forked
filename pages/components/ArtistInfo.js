import React, { useState, useEffect } from "react";
import styles from "@/styles/Program.module.css";

function ArtistInfo() {
  let [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://tan-chipped-baboon.glitch.me/bands"
      );
      const jsonData = await response.json();
      const first7Results = jsonData.slice(0, 4);
      setData(first7Results);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.ArtistInfo}>
      {data.map((item) => (
        <div className={styles.nameAndGenre} key={item.id}>
          <p>{item.name}</p>
          <p>{item.genre}</p>
        </div>
      ))}
    </div>
  );
}

export default ArtistInfo;
