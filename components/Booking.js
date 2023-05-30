import styles from "@/styles/Booking.module.css";
import React from "react";
import BookingItem from "@/components/BookingItem";
import { v4 as uuidv4 } from "uuid";

export default function Booking(props) {
  /*  const items = [
    { type: "VIP Ticket", price: 799, amount: 2, id: 1 },
    { type: "Regular Ticket", price: 599, amount: 1, id: 2 },
    { type: "Nilfheim Camping", id: 3 },
    { type: "Green Camping", price: 249, id: 4 },
  ]; */

  const items = [...props.products, { name: "Booking Fee", type: "Fee", price: 99, id: uuidv4() }];

  /* {items.map((item)=>{return <BookingItem />})} */

  return (
    <div className={styles.Booking}>
      <h1>Booking Summary</h1>
      {items.map((item) => {
        return <BookingItem key={item.id} name={item.name} price={item.price} item={item} />;
      })}

      <p>
        <span>Total</span>
        <span>
          <strong>DKK 1234,-</strong>
        </span>
      </p>
    </div>
  );
}
