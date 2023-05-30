import styles from "@/styles/Booking.module.css";
import React from "react";
import BookingItem from "@/components/BookingItem";

export default function Booking() {
  const items = [
    { type: "VIP Ticket", price: 799, amount: 2, id: 1 },
    { type: "Regular Ticket", price: 599, amount: 1, id: 2 },
    { type: "Nilfheim Camping", id: 3 },
    { type: "Green Camping", price: 249, id: 4 },
  ];

  /* {items.map((item)=>{return <BookingItem />})} */

  return (
    <div className={styles.Booking}>
      <h1>Booking Summary</h1>
      {items.map((item) => {
        return <BookingItem key={item.id} type={item.type} price={item.price} item={item} />;
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
