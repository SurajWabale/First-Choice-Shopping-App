import React from 'react'
import {useEffect, useState} from "react";
import axios from 'axios';

export default function ViewProduct() {

    const [data, setData] = useState([]);

    const handleDelete = (p_id) => {
        const confirmDelete = window.confirm('Are you sure !! you want to delete this category ?');

        if (confirmDelete) {
            axios.delete(`http://localhost:8080/deleteProductById/${p_id}`).then(res => {
                console.log('Category deleted successfully.');
                window.location.href = "/v_product_Details";
            }).catch(error => {
                console.error('Error deleting category:', error);
            });
        }
    };


    useEffect(() => {

        fetch("http://localhost:8080/getallproducts").then(res => res.json()).then(data => setData(data))
    }, []);

    return (
        <div  className="container-fluid mt-5 col-8 border bg-white ">
            <h2 className="text-center"><b>Product Details</b></h2>
            <table className="table table-striped">
                <tr>
                    <th className="text-center">Product Id</th>
                    {/* <th className="text-center">Product Images</th> */}
                    <th className="text-center">Product Name</th>
                    <th className="text-center">Product Description</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Size</th>
                    <th className="text-center">Brand</th>
                    <th className="text-center">Categoty Name</th>
                    <th className="text-center">Vendor Name</th>
                    <th className="text-center">Delete Product</th>
                </tr>
                {
                data.map((v ,index)=> {
                    return (
                        <tr>
                            <td className="text-center">
                                {
                                v.p_id
                            }</td>
                            <td style={{ width: '15%', }} className={`bg-${index % 6 + 1}`} >
              <img src={`data:image/png;base64,${v.p_image}`} alt="Product" className="img-thumbnail" />
              </td>
                             <td className="text-center">
                                {
                                v.p_name
                            }</td>
                            <td className="text-center">
                                {
                                v.p_desc
                            }</td>
                            <td className="text-center">
                                {
                                v.price
                            }</td>
                            <td className="text-center">
                                {
                                v.s_id.size
                            }</td>
                            <td className="text-center">
                                {
                                v.b_id.b_name
                            }</td> 
                             <td className="text-center">
                            {
                            v.c_id.c_name
                        }</td>
                            
                            <td className="text-center">
                                {
                                v.v_id.v_name
                            }</td>
                             <td className="text-center">
                                <button className="btn btn-danger btn-sm"
                                    onClick={
                                        () => handleDelete(v.p_id)
                                }>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )
                })
            } </table>
        </div>


    )
}
