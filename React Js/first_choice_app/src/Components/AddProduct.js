import React, { useReducer, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function AddProduct() {

    const init = {
      p_name: "",
      p_desc: "",
      price: "",
      size:0,
      b_name: "",
      c_id:0,
      quantity: ""
    };
  
    const reducer = (state, action) => {
      switch (action.type) {
        case "update":
          return { ...state, [action.fld]: action.val };
        case "reset":
          return init;
        default:
          return state;
      }
    };
  
    const [info, dispatch] = useReducer(reducer, init);
    const [file, setFile] = useState();
    const navigate = useNavigate();
    
    const v_id = JSON.parse(localStorage.getItem("loggedVendor")).v_id;
    
    
    

    const sendData = (e) => {
      e.preventDefault();
      const reqOptions = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
         ...info,
         v_id: v_id
        //  pwd: pwd
      })
      };
  
      fetch("http://localhost:8080/addProduct", reqOptions)
        .then((resp) => {
          if (resp.ok) return resp.json();
          else throw new Error("server error");
        })
        .then((obj) => {
          const fd = new FormData();
          fd.append("file", file);
          const reqOptions1 = {
            mode: "no-cors",
            method: "POST",
            body: fd,
          };
          fetch(
            "http://localhost:8080/uploadImage/" + obj.p_id,
            reqOptions1
          )
            .then((resp) => resp.json())
            .then((obj) => {
              if (obj) {
                alert("Image uploaded successfully");
                navigate("/");
              } else {
                alert(
                  "Reg Successful. Image is not Updated, Try Later"
                );
                navigate("/");
              }
            });
          alert("Product added successfully..");
          navigate("/");
        })
        .catch((error) =>
          alert("Server error. Try Later" + error)
        );
    };


    const [allcat,setAllcat]=useState([]);



    //   const options={
    //     method:'GET' ,S
    //     headers :{'content-type':'application/json'}, 
    //     body:JSON.stringify(info)
    
    // }
      useEffect(()=>{
    
              fetch("http://localhost:8080/getallcategory")
              .then((resp)=>resp.json())
              .then (cat=>setAllcat(cat));
    
    
      },[])
  
    return (
      <div className="container-fluid mt-5 col-5 fw-bold border bg-white text-dark">
      <form className="container-sm">
        <div className="col-md-6">
                  <label htmlFor="c_id">Select category:</label>
                  <select className="form-select" id="c_id" name="c_id" 
                  onChange={(e)=>{dispatch({type:'update',fld:'c_id',val:e.target.value})}} >
                      {
                              allcat.map(sp=>{
                                return <option value={sp.c_id_id}>{sp.c_name}</option>
                              })
                        }
                  </select>
        </div>
          <div className="col-md-6">
            <label htmlFor="productname">Product Name</label>
            <input
              type="text"
              className="form-control"
              id="productname"
              name="p_name"
              value={info.p_name}
              required
              onChange={(e) =>
                dispatch({
                  type: "update",
                  fld: "p_name",
                  val: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-3">
                <label htmlFor="desc" className="form-label">Description:</label> 
                <input type="text" className="form-control" id="desc" name=" p_desc" value={info. p_desc}
                 onChange={(e)=>dispatch({type: 'update', fld: 'p_desc', val: e.target.value})} />
          </div>
          <div className="mb-3">
                <label htmlFor="brand" className="form-label">Brand:</label> 
                <input type="text" className="form-control" id="brand" name="b_name" value={info.b_name}
                 onChange={(e)=>dispatch({type: 'update', fld: 'b_name', val: e.target.value})} />
          </div>
          {/* <div className="mb-3">
                <label htmlFor="size" className="form-label">size:</label> 
                <input type="text" className="form-control" id="size" name="size" value={info.size}
                 onChange={(e)=>dispatch({type: 'update', fld: 'size', val: e.target.value})} />
          </div> */}
          <div className="col-md-6">
                  <label htmlFor="size">Select Size:</label>
                  <select className="form-select" id="size" name="size" 
                  onChange={(e)=>{dispatch({type:'update',fld:'size',val:e.target.value})}} >
                    <option key={0} value={0}> select Size </option>
                    <option key={1} value={1}>S </option>
                    <option key={2} value={2}>M</option>
                    <option key={3} value={3}>L </option>
                    <option key={4} value={4}>XL </option>
                    <option key={5} value={5}>XXL </option>
                  </select>
        </div>
          <div className="mb-3">
                <label htmlFor="qty" className="form-label">Quantity:</label> 
                <input type="text" className="form-control" id="qty" name="quantity" value={info.quantity}
                 onChange={(e)=>dispatch({type: 'update', fld: 'quantity', val: e.target.value})} />
          </div>
          <div className="col-md-6">
            <label htmlFor="price">Price</label>
            <input type="text" className="form-control" id="price" name="price" value={info.price} 
            onChange={(e) =>dispatch({type: "update",fld: "price",val: e.target.value,})}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="image" className="form-label">
            Product Image:
            </label>
            <input
              type="file"
              className="form-control"
              id="image"
              name="image"
              onChange={(e)=>setFile(e.target.files[0])} ></input> 
          </div>              
                <div>
                <button type="submit" className="btn btn-primary mx-2 " onClick={(e)=>{sendData(e)}}>upload Product</button>
                <button type="reset" className="btn btn-primary mx-2" onClick={()=>{dispatch({type:'reset'})}}>Clear</button>
                </div>
   
              </form>
              <p>{JSON.stringify(info)}</p>
              <p>{file && file.name}</p>
              {/* <h1 className='bg-danger text-white'>Welcome Vendor :{ps.v_name}</h1>  */}
  
             {/* <p>{JSON.stringify(info)}</p>*/}
          </div>
      )
  }
  