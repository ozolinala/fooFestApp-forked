import styles from "@/styles/Camping.module.css";
import React from "react";
import CampingArea from "@/components/CampingArea";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Camping(props) {
  const [selectedCamping, setSelectedCamping] = useState({
    name: undefined,
    type: "Camping",
    id: undefined,
  });

  const areas = [
    /* later fetch data */

    {
      area: "Nilfheim",
      available: 1,
      id: uuidv4(),
    },
    {
      area: "Svartheim",
      available: 2,
      id: uuidv4(),
    },
    {
      area: "Helheim",
      available: 3,
      id: uuidv4(),
    },
    {
      area: "Muspelheim",
      available: 4,
      id: uuidv4(),
    },
    {
      area: "Alfheim",
      available: 5,
      id: uuidv4(),
    },
  ];

  return (
    <div className={styles.Camping}>
      {areas.map((area) => {
        return (
          <CampingArea
            key={area.id}
            id={area.id}
            area={area.area}
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
