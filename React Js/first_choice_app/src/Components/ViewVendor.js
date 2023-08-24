import React from "react";
import {useState, useEffect} from 'react';

export default function ViewVendor() {
    const [data, setData] = useState([]);
    const onChangeAproveStatus = (e, item) => {
        const updatedItems = data.map((v) => v.v_id === item.v_id ? {
            ...v,
            v_status: e.target.checked ? "true" : "false"
        } : v);

        setData(updatedItems);
    };

    const handleDelete = (c_id) => {
        const confirmDelete = window.confirm('Are you sure !! you want to delete this category ?');

        if (confirmDelete) {
            axios.delete(`http://localhost:8080/UpdateStatusById/${c_id}`).then(res => {
                console.log('Category deleted successfully.');
                window.location.href = "/v_categories";
            }).catch(error => {
                console.error('Error deleting category:', error);
            });
        }
    };

    useEffect(() => {
        fetch("http://localhost:8080/getallvendor").then(res => res.json()).then(data => setData(data)).catch(error => console.error('Error:', error));
   console.log(data);
    }, []);

    return (
        <div>

            <div className="container-fluid mt-100 col-8 border bg-white ">
                <h2 className="text-center">
                    <b>Vendor Details</b>
                </h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="text-center">Vendor Id</th>
                            <th className="text-center">Name</th>
                            <th className="text-center">Email</th>
                            <th className="text-center">Contact</th>
                            <th className="text-center">Address</th>
                            <th className="text-center">Shop_Licence_Id</th>
                            <th className="text-center">Vendor Approve</th>
                        </tr>
                    </thead>
                    <tbody> {
                        data.map(v => (
                            <tr key={
                                v.v_id
                            }>
                                <td className="text-center">
                                    {
                                    v.v_id
                                }</td>
                                <td className="text-center">
                                    {
                                    v.v_name
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
                                <td className="text-center">
                                    {
                                    v.shop_licence_id
                                }</td>
                                <td className="text-center">
                                    <input type="checkbox"
                                        id={
                                            `custom-switch-${
                                                v.v_id
                                            }`
                                        }
                                        checked={
                                            v.v_status === "true" || v.status === true
                                        }
                                        onChange={
                                            (e) => onChangeAproveStatus(e, v)
                                        }
                                        className="mt-2"/>
                                </td>

                            </tr>
                        ))
                    } </tbody>
                </table>
            </div>
        </div>

    );
}
