import styles from "@/styles/Camping.module.css";
import React from "react";
import CampingArea from "@/components/CampingArea";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Camping(props) {
  const [selectedCamping, setSelectedCamping] = useState({
    name: "",
    type: "Camping",
    id: "",
  });

  const [campingData, setCampingData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://tan-chipped-baboon.glitch.me/available-spots");
      const json = await response.json();
      setCampingData(json);
    }
    fetchData();
  }, []);

  const areas = campingData.map((data) => {
    return { ...data, id: uuidv4() };
  });

  console.log(areas);

  return (
    <div className={styles.Camping}>
      {areas.map((area) => {
        return (
          <CampingArea
            key={area.id}
            id={area.id}
            area={area.area}
            spots={area.spots}
            available={area.available}
            selectedCamping={selectedCamping}
            setSelectedCamping={setSelectedCamping}
            products={props.products}
            setProducts={props.setProducts}
          />
        );
      })}
    </div>
  );
}
