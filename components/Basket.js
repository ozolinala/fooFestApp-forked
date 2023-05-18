import React from 'react'
import { useContext } from 'react';
import { StoreContext } from '@/contexts/storeContext';

function Basket() {
  const state = useContext(StoreContext);
  console.log(state);
  console.log(typeof(state));
  // if (!state || !state.basket || state.basket.length === 0) {
  //   return <div>Empty basket</div>;
  // } else {
    function removeOne(){
      
    }

  return (
    <div>
        <h2>Basket</h2>
        <ul>
        {state.data.basket.map(item => {
          return(
            <li key={item.id} >{item.name} X {item.amount}
       <button onClick={removeOne}>-</button></li>
            ) 
       })}
        
        </ul>
    </div>
  );
}

export default Basket;