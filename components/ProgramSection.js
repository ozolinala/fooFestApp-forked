import React from "react";
import styles from "@/styles/Program.module.css";

export const ProgramSection = () => {
  return (
    <div className={styles.ProgramSection}>
      <img className={styles.programImage} src="pics/map.png" alt={`map`} />
      <div className={styles.midgardPin}>
        <p>Midgard</p>
        <img src="pics/pin.svg" alt={`map`} />
      </div>
      <div className={styles.JotunheimPin}>
        <p>Jotunheim</p>
        <img src="pics/pin.svg" alt={`map`} />
      </div>
      <div className={styles.VanaheimPin}>
        <p>Vanaheim</p>
        <img src="pics/pin.svg" alt={`map`} />
      </div>
    </div>
  );
};
