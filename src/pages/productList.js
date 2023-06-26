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

  return (
    <div className="product-list">

      {products.map((product, index) => {
        return <Product image={product.image} id={product.id} title={product.title} price={product.price} description={product.description} category={product.category} key={index} />
      })}
    </div>
  );

}

export default ProductList;