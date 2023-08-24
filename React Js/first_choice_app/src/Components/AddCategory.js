import React from 'react'
import {useReducer} from "react";

export default function AddCategory() {


    const init = {
        c_name: " "   
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'update':
                return {
                    ...state,
                    [action.fld]: action.val
                }
            case 'reset':
                return init;
            default:
        }
    }

    const [info, dispatch] = useReducer(reducer, init);
    const sendData = (e) => {
        e.preventDefault();
        const reqOptions = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)

        }
        fetch("http://localhost:8080/addcategory", reqOptions)
        .then(resp => {
            if (resp.ok) 
                return resp.text();
             else 
                throw new Error("Server Error");
            
        })
        .then(resp => resp.JSON)
        .then(obj => console.log(JSON.stringify(obj)))
        .then((obj)=>{alert("Category Added");
        window.location.href = "/v_categories";})
        .catch((error)=> alert("Server Error . Try After Some Time"));   
    }

    return (
        <div className="container-fluid mt-5 col-5 fw-bold border bg-white text-dark">

            <form action="">
            <div className="mb-3">
                    <label htmlFor="c_name" className="form-label ">Enter Category Name:</label>
                    <input type="text" className="form-control" id="c_name" name="c_name"
                        value={
                            info.c_name
                        }
                        onChange={
                            (e) => dispatch({type: 'update', fld: 'c_name', val: e.target.value})
                        }/>
                </div>
                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary mb-3"
                        onClick={
                            (e) => {
                                sendData(e)
                            }
                    }>Submit</button>
                    <button type="reset" className="btn btn-secondary mb-3"
                        onClick={
                            () => dispatch({type: 'reset'})
                    }>Reset</button>
                </div>
            </form>

        </div>
    )
}
