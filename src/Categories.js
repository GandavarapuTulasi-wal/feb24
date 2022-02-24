import { useState, useEffect } from "react";
import axios from "axios";
import AllProducts from "./AllProducts";
const Categories = () => {
    let [categories, setCategories] = useState([]);
    let [value, setValue] = useState("All Categories")
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/categories")
            .then((res) => {
                setCategories(res.data);
            });
    }, []);
    return (
        <div>
            <h1>Categories</h1>
            <select className="todo-user-input" onChange={(event) => setValue(event.target.value)}>
                <option selected>All Categories</option>
                {categories.map((val, index) => {
                    return (
                        <option className="product-category" value={val} id={index}>{val}</option>
                    );
                })}
            </select>
            <div>
            
            <AllProducts categories={value}></AllProducts>
            </div>
        </div>
    )
}
export default Categories;