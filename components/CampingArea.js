import styles from "@/styles/CampingArea.module.css";
import React from "react";

export default function CampingArea(props) {
  console.log(props.selectedCamping === props.id);
  return (
    <div
      className={styles.CampingArea}
      style={{
        backgroundColor: props.selectedCamping === props.id ? "#E3FFB7" : "",
        border: props.selectedCamping === props.id ? "3px solid black" : "",
      }}
      onClick={() => {
        props.setSelectedCamping(props.id);
        console.log(props.selectedCamping);
      }}
    >
      <h2>{props.area}</h2>
      <p>{props.available} Available</p>
    </div>
  );
}
