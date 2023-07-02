import { useEffect, useState } from "react";
import { Product } from "../components/ProductDetails";


const ProductList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProductList()

    async function getProductList() {
      console.log("ok");
      console.log(products);
      const response = await fetch("http://fakestoreapi.com/products", {
        method: "GET",
      })
      console.log(response);
      const responsBody = await response.json();
      console.log(responsBody);
      setProducts(responsBody);
    }
  }, [])



  async function AddToCart(productId) {
    try {
      const result = await fetch("http://fakestoreapi.com/carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "userId": "3",
          "date": "2020-02-03",
          "products": [
            {
              "productId": productId,
              "quantity": "1"
            }
          ]
        }),
      });

      console.log(result);
      const status = result.status

      if (status === 200) {
        console.log('Product added to cart')
      } else {
        console.error('Something went wrong')
      }
    } catch (error) {
      console.error("test error", error);
    }
  }



  return (
    <div className="product-list">

      {products.map((product, index) => {
        return (<div>
          <Product image={product.image} id={product.id} title={product.title} price={product.price} description={product.description} category={product.category} key={index} />
          <button className="add" onClick={() => AddToCart(product.id)}>Add to cart</button >
        </div>
        )
      })}
    </div>
  );

}

export default ProductList;