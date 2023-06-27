export function Product(props) {
    return (
        <div className="details">
            <div className="pro-img"><img src={props.image} /></div>
            <div>{props.id}</div>
            <div>{props.title}</div>
            <div>{props.price}</div>
            <div>{props.description}</div>
            <div>{props.category}</div>

            <div>{
                props.quantity ? (
                    <div>
                        <strong>
                            Qauntity: {props.quantity}
                        </strong>
                    </div>
                ) : null
            }</div>
        </div>
    )
}