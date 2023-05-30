import styles from "@/styles/CampingArea.module.css";
import React from "react";

export default function CampingArea(props) {
  function handleClick() {
    if (props.products.some((product) => product["type"] === "Camping")) {
      const campingInfo = props.products.map((product) => {
        if (product.type === "Camping") {
          return { ...product, name: props.area, id: props.id };
        }
        return product;
      });

      props.setProducts(campingInfo);

      console.log(props.products);
    } else {
      props.setProducts((old) => old.concat(props.selectedCamping));

      console.log(props.products);
    }
  }

  return (
    <div
      className={styles.CampingArea}
      style={{
        backgroundColor: props.selectedCamping.id === props.id ? "#E3FFB7" : "",
        border: props.selectedCamping.id === props.id ? "3px solid black" : "",
      }}
      onClick={() => {
        props.setSelectedCamping({ name: props.area, type: "Camping", id: props.id });

        handleClick();
      }}
    >
      <h2>{props.area}</h2>
      <p>{props.available} Available</p>
    </div>
  );
}
