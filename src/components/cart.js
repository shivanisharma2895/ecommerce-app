import { CartDetails } from "./cartDetails";
import { useEffect, useState } from "react";

const Cart = () => {

    const [carts, setCart] = useState([])
    useEffect(() => { getCart() }, [])
    async function getCart() {

        console.log(carts);
        const response = await fetch("http://fakestoreapi.com/carts/user/1", {
            method: "GET",
        })
        console.log(response);
        const responsBody = await response.json();
        console.log(responsBody);
        setCart(responsBody);
    }

    return (
        <div className="cart-details">
            {carts.map((cart, index) => {
                return <CartDetails id={cart.id} userId={cart.userId} date={cart.date} __v={cart.__v} products={cart.products} key={index} />
            })}

        </div>
    );
}

export default Cart;