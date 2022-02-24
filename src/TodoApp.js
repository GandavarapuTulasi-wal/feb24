import { useState, useEffect } from "react";
import axios from "axios";
const TodoApp = (props) => {
    let [product, setProduct] = useState(["Default Product"])
    useEffect(() => {
            axios.get("https://gorest.co.in/public/v2/todos").then((res) => {

                setProduct(res.data)
            })


    }, [product])

    return (
        <div className="products-container">
            <h1>All Todos</h1>
            <div className="card-container">
                <table id="tablevalues">
                    <tr>
                        <th>Id</th>
                        <th>User Id</th>
                        <th>Title</th>
                        <th>Due on</th>
                        <th>Status</th>
                    </tr>
                {product.map((val) => {
                    return (

                        <tr>
                            <td>{val.id}</td>
                            <td>{val.user_id}</td>
                            <td>{val.title}</td>
                            <td>{val.due_on}</td>
                            <td>{val.status}</td>
                        </tr>
                    )

                })}
                </table>
            </div>
        </div>


    )

}

export default TodoApp;