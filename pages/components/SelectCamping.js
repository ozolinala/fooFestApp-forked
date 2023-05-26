import React from "react";
import styles from "@/styles/Checkout.module.css";
import CampingType from "./CampingType";
import Basket from "@/components/Basket";

function SelectCamping() {
  return (
    <div className={styles.CampingFlex}>
      <CampingType />

      <Basket />
    </div>
  );
}

export default SelectCamping;
