import logo from './logo.svg';
import './App.css';
import Product from './Product'
import AllProducts from './AllProducts'
import { useState } from 'react'
import axios from 'axios'
import Header from './Header'
import Categories from './Categories'

function App() {
  let [productId, setProductId] = useState(1)
  return (
    <div>
      <Header></Header>
      <form onSubmit={(event) => {
        event.preventDefault()
        setProductId(event.target.id.value)
      }}>
        <input type="number" name="id" placeholder="Enter Product Id" className="todo-user-input" />

      </form>

      <Product productId={productId}></Product>
      <Categories></Categories>
    </div>


  );
}

export default App;
