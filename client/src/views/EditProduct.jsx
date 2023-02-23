import {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditProduct = (props) => {
    const {handleUpdate} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res => {
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
        }).catch(err => {
            console.log(err);
        })
    }, [id])

    const handleSubmit = ((e) => {
        e.preventDefault();
        const data = {
            title,
            price,
            description
        }
        axios.put(`http://localhost:8000/api/products/${id}`, data, {new:true})
        .then (res => {
            console.log(res);
            handleUpdate(id);
            navigate('/products');
        }).catch(err => {
            console.log(err);
        })
    })

    return (
        <div className="container w-50">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="h6">Title</label>
                    <input type="text" name="title" onChange={e => {setTitle(e.target.value)}} className="form-control" value={title}/>
                </div>
                <div className="form-group">
                    <label className="h6">Price</label>
                    <input type="text" name="price" onChange={e => {setPrice(e.target.value)}} className="form-control" value={price}/>
                </div>
                <div className="form-group">
                    <label className="h6">Description</label>
                    <input type="text" name="description" onChange={e => {setDescription(e.target.value)}} className="form-control" value={description}/>
                </div>
                <button className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}

export default EditProduct;