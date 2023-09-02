import React from 'react'
import {useEffect, useState} from "react";
import axios from 'axios';

export default function ViewBrands() {

    const [brand, setBrands] = useState([]);

    useEffect(() => {

        fetch("https://localhost:7275/api/Brands").then(res => res.json()).then(brand => setBrands(brand))
    }, []);

    return (
        <div  className="container-fluid mt-5 col-8  border bg-white ">
            <h2 className="text-center"><b>Brand</b></h2>
            <table className="table table-striped">
                <tr className="text-dark">
                    <th className="text-center">Brand Id</th>
                    <th className="text-center">Brand Name</th>
                </tr>
                {
                brand.map(v => {
                    return (
                        <tr>
                            <td className="text-center">
                                {
                                v.bId
                            }</td>
                            <td className="text-center">
                                {
                                v.bName
                            }</td>
                        
                     </tr>
                    )
                })
            } </table>
        </div>
    )
}
