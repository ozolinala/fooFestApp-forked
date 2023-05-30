import styles from "@/styles/Camping.module.css";
import React from "react";
import CampingArea from "@/components/CampingArea";
import { useState } from "react";

export default function Camping(props) {
  const [selectedCamping, setSelectedCamping] = useState({
    name: undefined,
    type: "Camping",
    id: undefined,
  });

  console.log(props);

  const areas = [
    /* later fetch data */

    {
      area: "Nilfheim",
      available: 1,
      id: 1,
    },
    {
      area: "Svartheim",
      available: 2,
      id: 2,
    },
    {
      area: "Helheim",
      available: 3,
      id: 3,
    },
    {
      area: "Muspelheim",
      available: 4,
      id: 4,
    },
    {
      area: "Alfheim",
      available: 5,
      id: 5,
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
