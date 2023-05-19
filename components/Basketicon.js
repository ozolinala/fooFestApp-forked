import React from 'react'
import { useContext } from 'react';
import { StoreContext, DispatchContext } from '@/contexts/storeContext';
import Link from 'next/link';

export default function Basketicon(props) {
  const state = useContext(StoreContext);

  return (
    <div>
      <Link href="./basket">
      <img src="/pics/ticket.svg" alt='Cart'></img></Link> <p>{props.amount}</p>
    
       <Link href="./checkout">
       <img src="/pics/user.svg" alt='Profile'></img></Link>
       </div>
  );
      }

