import React, { useState, useEffect } from "react";
import styles from "@/styles/Program.module.css";

function FestivalSchedule() {
  let [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://tan-chipped-baboon.glitch.me/schedule"
      );
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.FestivalSchedule}>
      {data.map((item) => (
        <div className={styles.nameAndGenre} key={item.id}>
          <p>{item.name}</p>
          <p>{item.genre}</p>
        </div>
      ))}
    </div>
  );
}

export default FestivalSchedule;
