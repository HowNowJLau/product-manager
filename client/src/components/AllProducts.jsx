import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AllProducts = (props) => {
    const {products, handleDelete} = props;
    



    return (
        <div className="container w-50">
            {
                products.map((product, i) => {
                    const { _id, title, price, description } = product;
                    return (
                        <div key={i} className="mb-4 border p-4">
                            <Link to={`/products/${_id}`}><h4>{title}</h4></Link>
                            <p>Price: {price}</p>
                            <p>Description: {description}</p>
                            <button onClick={()=>{handleDelete(_id)}} className="btn btn-sm btn-outline-danger mx-1">Delete</button>
                            <Link to={`/products/${_id}/edit`}>
                                <button className="btn btn-sm btn-outline-warning">Edit</button>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllProducts;