import './App.css';
import {Link, Navigate, Route, Routes} from "react-router-dom";
import NewProduct from './components/NewProduct';
import {useState, useEffect} from "react";
import axios from 'axios';
import AllProducts from './components/AllProducts';
import OneProduct from './views/OneProduct';
import EditProduct from './views/EditProduct';


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
        .then(res => {
            console.log(res);
            setProducts(res.data);
        }).catch(err => {
            console.log(err);
        })
}, []);


  const handleCreate = (product) => {
    axios.post("http://localhost:8000/api/products", product)
    .then(res => {
      console.log(res);
      setProducts([...products, res.data])
    }).catch(err => {
      console.log(err);
    })
    // setProducts([product, ...stateProducts]);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/products/${id}`)
    .then(res => {
        console.log(res);
        const filteredList = products.filter((product) => {
            return product._id != id;
        })
        setProducts(filteredList);
    }).catch(err => {
        console.log(err);
    })
}

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/products" replace/>}/>
        <Route path="/products" element={<>
          <NewProduct handleCreate={handleCreate}/>
          <hr />
          <AllProducts products={products} handleDelete={handleDelete}/>
        </>}/>
        <Route path="/products/:id" element={<OneProduct/>}/>
        <Route path="/products/:id/edit" element={<EditProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
