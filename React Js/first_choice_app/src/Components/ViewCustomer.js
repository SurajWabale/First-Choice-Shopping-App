import React from 'react'
import {useEffect, useState} from "react";

export default function ViewCustomer() {

    const [data, setData] = useState([]);

    useEffect(() => {

        fetch("http://localhost:8080/getallcustomers").then(res => res.json()).then(data => setData(data))
    }, []);

    return (
        <div  className="container-fluid mt-5 col-8 border bg-white ">
        <h2 className="text-center"><b>Customer Details</b></h2>

            <table className="table table-striped">
                <tr>
                    <th className="text-center">Customer Id</th>
                    <th className="text-center">Name</th>
                    <th className="text-center">Email</th>
                    <th className="text-center">Contact</th>
                    <th className="text-center">Address</th>
                </tr>


                {
                data.map(v => {
                    // if (v.role_id.role_id === 2) {
                        return (
                            <tr>
                                <td className="text-center">
                                    {
                                    v.c_id
                                }</td>
                                <td className="text-center">
                                    {
                                    v.c_name
                                }</td>
                                <td className="text-center">
                                    {
                                    v.email
                                }</td>
                                <td className="text-center">
                                    {
                                    v.contact
                                }</td>
                                <td className="text-center">
                                    {
                                    v.address
                                }</td>             
                            </tr>
                        )
                })
            } </table>


        </div>
    )
}
