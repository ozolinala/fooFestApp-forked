import React from "react";
import { useContext } from "react";
import { StoreContext, DispatchContext } from "@/contexts/storeContext";
import Cartitem from "./Cartitem";
import Link from "next/link";

function Basket() {
  const state = useContext(StoreContext);
  const dispatch = useContext(DispatchContext);

  return (
    <div>
      <h2>Basket</h2>
      <ul>
        {state.data.basket.map((item) => {
          return <Cartitem {...item} />;
        })}
      </ul>
      {/* <p><strong>Total amount:</strong>{totalAmount}</p>
    <p><strong>Total price:</strong>{total},-</p> */}
      <button onClick={() => dispatch({ action: "EMPTY_BASKET" })}>Delete Everything</button>{" "}
      <Link href="/checkout">Checkout</Link>
    </div>
  );
}

export default Basket;
