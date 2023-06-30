import { useState } from "react";


const AddToCart = () => {
    const [addToCart, setAddToCart] = useState([])



    async function getAddProduct() {
        console.log("ok");
        console.log(addToCart);
        const response = await fetch("http://fakestoreapi.com/carts", {
            method: "POST",
        })
        console.log(response);
        const responsBody = await response.json();
        console.log(responsBody);
        setAddToCart(responsBody);
    }



}

export default AddToCart;