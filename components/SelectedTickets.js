import React from "react";
import { useContext, useEffect, useState } from "react";
import { StoreContext, DispatchContext } from "@/contexts/storeContext";
import Cartitem from "@/components/Cartitem";
import Link from "next/link";
import styles from "@/styles/Basket.module.css";
import { v4 as uuidv4 } from "uuid";

export default function SelectedTickets(props) {
  const state = useContext(StoreContext);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const { data } = useContext(StoreContext);

  const selectedTickets = state.data.basket.map((item) => {
    return { ...item, type: "Ticket", id: uuidv4() };
  });

  useEffect(() => {
    props.setProducts(selectedTickets);
  }, [state]);

  return <></>;
}
