import { React, useState } from "react";
import { Button, message, Steps, theme } from "antd";
import SelectCamping from "./components/SelectCamping.js";
import styles from "@/styles/Checkout.module.css";
import Camping from "@/components/Camping.js";
import Booking from "@/components/Booking.js";

function CheckoutTest() {
  /* data */

  const [products, setProducts] = useState([]);

  const data = {
    products,
  };

  /* antd pages */

  const steps = [
    {
      title: "Selected Tickets",
      content: "First-content",
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
          <Booking products={products} setProducts={setProducts} />
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
          <SelectCamping />
          <Booking />
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
