import React from 'react'
import {useEffect, useState} from 'react';

export default function ViewProductVendor() {

    const [data, setData] = useState([]);
    const v_id = JSON.parse(localStorage.getItem("loggedVendor")).v_id;
    console.log("vid"+v_id)
    useEffect(() => {         
        fetch(`http://localhost:8080/getAllProductOfVendor/${v_id}`)   
        .then(resp => resp.json()).then(data => {
            console.log(data)
            setData(data); 
        }).catch(error => {
            console.error("Error fetching data:", error);
        });
    },[]); 

    return (
        <div className="container-fluid mt-5 col-8 border bg-white ">
            <h2 className="text-center">
                <b>Product Details</b>
            </h2>
            <table className="table table-striped">
                <thead>
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
                </thead>
                <tbody>
                    {
                        data.map((v,index)=> {
                            return(
                                <tr key={v.p_id}>
                                    <td>
                                        {v.p_id}
                                    </td>
                                    <tr>
                                        {v.p_name}
                                    </tr>
                                    <tr>
                                        {v.price}
                                    </tr>
                                    <tr>
                                        {v.s_id.size}
                                    </tr>
                                    <tr>
                                        {v.b_id.b_name}
                                    </tr>
                                    <tr>
                                        {v.c_id.c_name}
                                    </tr>
                                </tr>
                            )
                        })
                    }
                </tbody>
                

            </table>
        </div>

    )
}
