import React from 'react'
import {useEffect, useState} from "react";
import axios from 'axios';

export default function ViewCategory() {

    const [data, setData] = useState([]);


    const handleDelete = (c_id) => {
        const confirmDelete = window.confirm('Are you sure !! you want to delete this category ?');

        if (confirmDelete) {
            axios.delete(`http://localhost:8080/deleteCategoryById/${c_id}`).then(res => {
                console.log('Category deleted successfully.');
                window.location.href = "/v_categories";
            }).catch(error => {
                console.error('Error deleting category:', error);
            });
        }
    };

    useEffect(() => {

        fetch("http://localhost:8080/getallcategory").then(res => res.json()).then(data => setData(data))
    }, []);

    return (
        <div  className="container-fluid mt-5 col-8  border bg-white ">
            <h2 className="text-center"><b>Category Table</b></h2>
            <table className="table table-striped">
                <tr className="text-dark">
                    <th className="text-center">Category Id</th>
                    <th className="text-center">Category Name</th>
                    <th className="text-center">Delete Category</th>
                </tr>
                {
                data.map(v => {
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
                                <button className="btn btn-danger btn-sm"
                                    onClick={
                                        () => handleDelete(v.c_id)
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
