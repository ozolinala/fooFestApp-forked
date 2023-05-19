import React from 'react'
import styles from "@/styles/Basket.module.css";
import { useContext } from 'react';
import { DispatchContext } from '@/contexts/storeContext';

function Cartitem(props) {
    const dispatch = useContext(DispatchContext);

      function removeOne(){
  dispatch({
    action: "REMOVE_ONE_PRODUCT" ,
    payload: {
      id: props.id,
    },
  });
}
function addOne(){
    dispatch({
        action: "ADD_PRODUCT",
        payload: {
            id: props.id,
        },
    });
}
  return (

    <li className={styles.ticket}>
        {props.name} DKK {props.price},-
        <button className={styles.addRemove} onClick={removeOne}> - </button>
        {props.amount}
    <button className={styles.addRemove} onClick={addOne}> + </button>
    </li>

  )
}

export default Cartitem