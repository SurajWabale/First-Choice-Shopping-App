import React from 'react'
import {useEffect, useState} from "react";

export default function ViewCustomerN() {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {

        fetch("https://localhost:7275/api/Customers").then(res => res.json()).then(customers => setCustomers(customers))
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
                customers.map(v => {
                   
                        return (
                            <tr>
                                <td className="text-center">
                                    {
                                    v.cId
                                }</td>
                                <td className="text-center">
                                    {
                                    v.cName
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
