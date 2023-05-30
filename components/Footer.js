import React from "react";
import styles from "@/styles/Home.module.css";

export const Footer = () => {
  return (
    <div className={styles.Footer}>
      <p>LOGO</p>
      <ul>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Global</a>
        </li>
        <li>
          <a href="#">Tickets</a>
        </li>
      </ul>
    </div>
  );
};
