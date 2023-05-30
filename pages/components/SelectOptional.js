import React, { useState } from "react";
import styles from "@/styles/Checkout.module.css";
import Basket from "@/components/Basket";

function SelectOptional(props) {
  const [selectedOptional, setSelectedOptional] = useState([]);

  function handleClick(name, price) {
    const option = {
      name,
      price,
      type: "Optional",
    };

    if (props.products.some((product) => product["name"] === name)) {
      props.setProducts((old) =>
        old.filter((product) => {
          return product["name"] !== name;
        })
      );
    } else {
      props.setProducts((old) => old.concat(option));
    }

    /*   props.setProducts((old) => old.concat(option)); */

    console.log(props.products);
  }

  return (
    <div className={styles.CampingTypeFlex}>
      <div
        className={styles.CampingType}
        style={{
          backgroundColor: selectedOptional.includes("green") ? "#E3FFB7" : "",
          border: selectedOptional.includes("green") ? "3px solid black" : "",
        }}
        onClick={() => {
          setSelectedOptional((old) => old.concat("green"));
          handleClick("Green Camping", 249);
        }}
      >
        <p>01</p>
        <img src="pics/green.svg" alt={`artist1`} />
        <h3>Green camping</h3>
        <p>The tents are made from recycled materials and FooFest loves sustainability.</p>
        <span className={styles.Price}>DKK 249,-</span>
      </div>
      <div
        className={styles.CampingType}
        style={{
          backgroundColor: selectedOptional.includes("setup") ? "#E3FFB7" : "",
          border: selectedOptional.includes("setup") ? "3px solid black" : "",
        }}
        onClick={() => {
          setSelectedOptional((old) => old.concat("setup"));
          handleClick("Set-up Service", 299);
        }}
      >
        <p>02</p>
        <img src="pics/tent.svg" alt={`artist1`} />
        <h3>Tent Set-up Service</h3>
        <p>The crew will set up tents for you. The tents are included in the price.</p>
        <span className={styles.Price}>DKK 299,-</span>
      </div>
    </div>
  );
}

export default SelectOptional;
