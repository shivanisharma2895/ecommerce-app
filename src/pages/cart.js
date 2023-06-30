import { useEffect, useState } from "react";
import { Product } from "../components/ProductDetails";

const Cart = () => {
    const [cartData, setCartData] = useState([])
    const [cartWithDetails, setCartWithDetails] = useState([])

    useEffect(() => {
        getCart()
        async function getCart() {
            const response = await fetch("http://fakestoreapi.com/carts/user/1", {
                method: "GET",
            })
            console.log(response);
            const responsBody = await response.json();
            console.log(responsBody);
            setCartData(responsBody[0].products);
        }
    }, [])


    useEffect(() => {
        if (cartData.length) {
            getProductList()
        }

        async function getProductList() {
            const response = await fetch("http://fakestoreapi.com/products", {
                method: "GET",
            })
            const products = await response.json();


            let productIdsInCartMap = {};

            for (let i = 0; i < cartData.length; i++) {
                productIdsInCartMap[cartData[i].productId] = cartData[i];
            }

            console.log(productIdsInCartMap)


            for (let i = 0; i < products.length; i++) {
                if (productIdsInCartMap[products[i].id]) {
                    const tempCartData = productIdsInCartMap[cartData[i].productId];

                    productIdsInCartMap[cartData[i].productId] = products[i];
                    productIdsInCartMap[cartData[i].productId].quantity = tempCartData.quantity;
                }
            }


            const keys = Object.keys(productIdsInCartMap);

            const cartDataWithAllInformation = [];

            for (let i = 0; i < keys.length; i++) {
                cartDataWithAllInformation.push(productIdsInCartMap[keys[i]]);
            }
            setCartWithDetails(cartDataWithAllInformation)
        }
    }, [cartData])


    async function deleteFromCart() {
        const result = await fetch("http://fakestoreapi.com/carts/1", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },

        });

        console.log(result);
        const status = result.status

        if (status === 200) {
            console.log('item has been deleted')
        } else {
            console.error('Something went wrong')
        }
    }


    return (
        <div className="cart-details">
            <button className="del-btn" onClick={() => deleteFromCart()}>Delete from cart</button>

            {cartWithDetails.map((product, index) => {
                return <div ><Product image={product.image} id={product.id} title={product.title} price={product.price} description={product.description} category={product.category} key={index} quantity={product.quantity} />
                </div>
            })}

        </div>
    );
}

export default Cart;