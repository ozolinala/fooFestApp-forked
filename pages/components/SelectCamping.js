import React from "react";
import styles from "@/styles/Checkout.module.css";
import CampingType from "./CampingType";

function SelectCamping() {
  return (
    <div className={styles.CampingFlex}>
      <div>
        <CampingType />
      </div>
      <div>BASKET</div>
    </div>
  );
}

export default SelectCamping;
