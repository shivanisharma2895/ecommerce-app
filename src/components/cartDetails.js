export function CartDetails(props) {
    return (
        <div className=" cart-detail">

            {props.id}
            {props.userId}
            {props.date}
            {props.__v}
            {props.products}


        </div>
    )
}