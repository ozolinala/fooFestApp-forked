import { React, useState, useContext, useEffect } from "react";
import { Button, message, Steps, theme } from "antd";
import SelectOptional from "./components/SelectOptional.js";
import styles from "@/styles/Checkout.module.css";
import Camping from "@/components/Camping.js";
import Booking from "@/components/Booking.js";
import { v4 as uuidv4 } from "uuid";
import SelectedTickets from "@/components/SelectedTickets.js";
import { StoreContext, DispatchContext } from "@/contexts/storeContext";

function CheckoutTest() {
  /* data */

  const [products, setProducts] = useState([]);

  /* total ticket price */

  const [totalAmount, setTotalAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const { data } = useContext(StoreContext);

  useEffect(() => {
    let amount = 0;
    let price = 0;

    data.basket.forEach((item) => {
      amount += item.amount;
      price += item.price * item.amount;
    });

    setTotalAmount(amount);
    setTotalPrice(price);
  }, [data.basket]);

  /* antd pages */

  const steps = [
    {
      title: "Selected Tickets",
      content: (
        <div
          style={{
            lineHeight: "1rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <SelectedTickets products={products} setProducts={setProducts}></SelectedTickets>
          <Booking products={products} setProducts={setProducts} totalPrice={totalPrice} />
        </div>
      ),
    },
    {
      title: "Select Camping",
      content: (
        <div
          style={{
            lineHeight: "1rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Camping products={products} setProducts={setProducts} />
          <Booking products={products} setProducts={setProducts} totalPrice={totalPrice} />
        </div>
      ),
    },
    {
      title: "Select Optional",
      content: (
        <div
          style={{
            lineHeight: "1rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <SelectOptional products={products} setProducts={setProducts} />
          <Booking products={products} setProducts={setProducts} totalPrice={totalPrice} />
        </div>
      ),
    },
    {
      title: "Booking Information",
      content: "",
    },
    {
      title: "Payment",
      content: "Last-content",
    },
    {
      title: "Done",
      content: "Last-content",
    },
  ];

  /*  */

  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  return (
    <>
      <div className={styles.CheckoutButtons}>
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success("Processing complete!")}>
            Done
          </Button>
        )}
      </div>
      <Steps className={styles.Steps} current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
    </>
  );
}

export default CheckoutTest;
