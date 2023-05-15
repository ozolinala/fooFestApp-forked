function Ticket(props) {
    return (
        <article>
            <p>{props.id}</p>
            <h3>{props.name}</h3>
<p>Price: {props.price}</p>
            
<button>Add to cart</button>
            </article>
    )
}

export default Ticket;