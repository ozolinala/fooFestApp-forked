import React from "react";
import ArtistInfo from "./ArtistInfo";
import styles from "@/styles/Program.module.css";

function OneDaySchedule() {
  return (
    <article className={styles.OneDaySchedule}>
      <div>
        <h2>Monday</h2>
      </div>
      <div>
        <ArtistInfo />
      </div>
    </article>
  );
}

export default OneDaySchedule;
