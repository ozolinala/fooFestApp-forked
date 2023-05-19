import { useContext } from "react";
import { DispatchContext } from "@/contexts/storeContext";

function Ticket(props) {
    const dispatch = useContext(DispatchContext);
    function addToBasket() {
        dispatch ({
            action:"ADD_PRODUCT",
            payload:{
                id: props.id,
                price: props.price,
                name: props.name
            }
        })
    }

    return (
        
        <article>
            <p>{props.id}</p>
            <h3>{props.name}</h3>
<p>Price: {props.price}</p>
            
<button onClick={addToBasket}>Add to cart</button>
            </article>
    )
}

export default Ticket;