import React from "react";
import styles from "@/styles/Home.module.css";

export const Newsletter = () => {
  return (
    <div className={styles.Newsletter}>
      <h2>
        Subscribe to our newsletter to be up to date with festival announcements
      </h2>

      <form>
        <label htmlFor="newsletterInput">
          <input
            placeholder="Insert your email"
            id="newsletterInput"
            type="text"
            name="newsletterInput"
          ></input>
        </label>
      </form>
    </div>
  );
};
