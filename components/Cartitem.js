import React from 'react'
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

    <li>
        {props.name} 
        <button onClick={removeOne}> (-) </button>
        {props.amount}
    <button onClick={addOne}> (+) </button>
    </li>

  )
}

export default Cartitem