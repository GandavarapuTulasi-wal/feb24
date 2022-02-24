import { useState, useEffect } from "react";
import axios from "axios";
const Product = (props) => {
  let [products, setProducts] = useState([]);
  let [rating, setRating] = useState([]);
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${props.productId}`)
      .then((res) => {
        setProducts(res.data);
        setRating(res.data.rating);
      })
  }, [props.productId])
  return (
    <div className="products-container">
      <h1>{`Product ${products.id}`}</h1>
      <div className="card-container">

        <div className="Product_one">
          <img src={products.image} className="image" alt={`product${products.id}`} />
          <p>Product Id :  {products.id}</p>
          <p className="Title">{products.title}</p>
          <p className="Description">{products.description}</p>
          <p className="price">Rs. {products.price}</p>
          <p className="category">Category:{products.category}</p>
          <div className="rating">
            <p>Rate : {rating.rate}</p>
            <p>Count :{rating.count}</p>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Product;