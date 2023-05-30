import React from "react";
import styles from "@/styles/Home.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <p>LOGO</p>
      <ul className={styles.navLinks}>
        <li>
          <a href="#">Program</a>
        </li>
        <li>
          <a href="#">Tickets</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
    </nav>
  );
};
