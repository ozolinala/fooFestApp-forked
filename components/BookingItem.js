import React from "react";
import styles from "@/styles/BookingItem.module.css";

export default function BookingItem(props) {
  return (
    <div className={styles.BookingItem}>
      <span>{props.name}</span>
      <span
        style={{
          visibility: props.item.amount ? "visible" : "hidden",
        }}
      >
        ×{props.item.amount}
      </span>
      <span
        style={{
          visibility: props.price ? "visible" : "hidden",
        }}
      >
        DKK {props.price},-
      </span>
    </div>
  );
}
