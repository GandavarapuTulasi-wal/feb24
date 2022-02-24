import { useState, useEffect } from "react";
import axios from "axios";
const AllProducts = (props) => {
    let [product, setProduct] = useState(["Default Product"])
    useEffect(() => {
        if (props.categories == "All Categories") {
            axios.get("https://fakestoreapi.com/products").then((res) => {

                setProduct(res.data)
            })
        }
        else {
            axios.get(`https://fakestoreapi.com/products/category/${props.categories}`).then((res) => {

                setProduct(res.data)

            })
        }


    }, [product])

    return (
        <div className="products-container">
            <h1>All products</h1>
            <div className="card-container">
                {product.map((val) => {
                    return (

                        <div className="Product">
                            <img src={val.image} className="image" alt={`product${val.id}`} />
                            <p>Product Id :  {val.id}</p>
                            <p className="Title">{val.title}</p>
                            <p className="Description">{val.description}</p>
                            <p className="price">Rs. {val.price}</p>
                        </div>
                    )

                })}
            </div>
        </div>


    )

}

export default AllProducts;