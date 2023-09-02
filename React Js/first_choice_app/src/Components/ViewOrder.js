import React from 'react';
import { useEffect,useState } from 'react';


export default function ViewOrder() {

  const [data, setData] = useState([]);

  const c_id = JSON.parse(localStorage.getItem("loggedCustomer")).c_id;


//   useEffect(() => {

//     fetch("http://localhost:8080/getAllOrders").then(res => res.json()).then(data => setData(data))
// }, []);

useEffect(() => {
    fetch("http://localhost:8080/getOrdersByCustId?cid=" + c_id).then(resp => resp.json()).then((obj) => {
        if (obj) {
            setData(obj); // Fix: Set the fetched data to the state
        }
    }).catch(error => {
        console.error("Error fetching data:", error);
    });
}, [c_id]);

console.log(data)

  return (
    <div  className="container-fluid mt-5 col-8 border bg-white ">
    <h2 className="text-center"><b>Order Details</b></h2>
    <table className="table table-striped">
        <tr>
                    <th className="text-center">Order id</th>
                    <th className="text-center">Customer Name</th>
                    <th className="text-center">Order Date</th>
                    <th className="text-center">Price</th>
                    {/* <th className="text-center">Size</th> */}
                    <th className="text-center">Address</th>
        </tr>
        {
                data.map((v)=> {
                    return (
                        <tr>
                             <td className="text-center">
                                {
                                v.o_id
                            }</td>
                            <td className="text-center">
                                {
                                v.c_id.c_name
                            }</td>
                            <td className="text-center">
                                {
                                v.date
                            }</td>
                            <td className="text-center">
                                {
                                v.total_amount
                            }</td>
                             <td className="text-center">
                                {
                                v.shipping_address
                            }</td>
                        </tr>
                    )
                })
            } 
      </table>
    </div>
  );
}
