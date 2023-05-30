import React from "react";
import styles from "@/styles/Home.module.css";

export const HeroSection = () => {
  return (
    <div className={styles.HeroSection}>
      <img className={styles.heroImage} src="pics/home.webp" alt={`artist1`} />

      <div className={styles.heroTextContainer}>
        <div className={styles.heroText}>
          <div className={styles.writtenFoo}>
            <div className={styles.lineText}>
              <h3>THE <div className={styles.writtenNew}>new </div>MUSIC FESTIVAL</h3>
            </div>
            <h1 className={styles.writtenFoo}>‘foo’</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

