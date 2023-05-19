import React from 'react'
import { useContext, useEffect, useState } from 'react';
import { StoreContext, DispatchContext } from '@/contexts/storeContext';
import Cartitem from '/components/Cartitem';
import Link from 'next/link';

function Basket() {
  const state = useContext(StoreContext);
const dispatch = useContext(DispatchContext);
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

  return (
    <div>
        <h2>Basket</h2>
        <ul>
        {state.data.basket.map((item) => {
       return <Cartitem {...item}/>
       })}
        
        </ul>
        <button onClick={() =>dispatch({action:"EMPTY_BASKET"})}>Clear Basket</button>
    
    <p><strong>Total amount:</strong> {totalAmount}</p>
    <p><strong>Total price:</strong> {totalPrice},-</p>

    <Link href="/checkout">Checkout</Link>
    </div>
  );
      }

export default Basket;