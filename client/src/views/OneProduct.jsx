import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const OneProduct = () => {
    const [product, setProduct] = useState(null);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res => {
            console.log(res);
            setProduct(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, [id])

    if (product === null) {
        return <h1>Loading...</h1>
    }

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then(res => {
            console.log(res);
            navigate('/products');
        }).catch(err => {
            console.log(err);
        })
    }    

    const {title, price, description} = product;

    return (
        <div className="mb-4 border p-4">
            <h4>{title}</h4>
            <p>Price: {price}</p>
            <p>Description: {description}</p>
            <button className="btn btn-outline-danger mx-1" onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default OneProduct;