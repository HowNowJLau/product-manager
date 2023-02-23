import { useState } from "react";

const NewProduct = (props) => {
    const {handleCreate} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const handleNewProductSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            title: title,
            price: Number(price),
            description: description
        }
        handleCreate(newProduct);
        setTitle("");
        setPrice("");
        setDescription("");
    }

    return (
        <div className="container w-50">
            <h2>Product Manager</h2>
            <form onSubmit={handleNewProductSubmit}>
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

export default NewProduct;