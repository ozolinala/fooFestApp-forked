import React from "react";
import styles from "@/styles/Checkout.module.css";

function CampingType() {
  return (
    <div className={styles.CampingType}>
      <p>01</p>
      <h3>Green camping</h3>
      <p>
        The tents are made from recycled materials and FooFest loves
        sustainability.
      </p>
      <span>DKK 249,-</span>
    </div>
  );
}

export default CampingType;
