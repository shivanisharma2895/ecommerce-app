export function Product(props) {
    return (
        <div className="details">
            <img src={props.image} /><br />
            {props.id}-
            {props.title}<br />
            {props.price}<br />
            {props.description}<br />
            {props.category}


        </div>
    )
}