import React from "react";
import styles from "@/styles/Home.module.css";

export const HeroSection = () => {
  return (
    <div className={styles.HeroSection}>
      <div className={styles.heroText}>
        <h1>FOOFEST</h1>
      </div>
      <div className={styles.heroGraphics}></div>
    </div>
  );
};
