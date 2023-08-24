import React from "react";
import {useReducer} from "react";
import img1 from './Images/img1.jpg'
export default function Vendorreg() {
    const init = {
        uid: "",
        pwd: "",
        v_name: "",
        email: "",
        contact: "",
        address: "",
        shop_licence_id: ""
    }
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
        fetch("http://localhost:8080/regVendor", reqOptions).then(resp => resp.JSON).then(obj => console.log(JSON.stringify(obj)))
        alert('Vendor Account Created successfully.');
        window.location.href = "/login";

    }


    return (
        <div style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '100vh'  }}>
        <div className="container-fluid mt-5 col-5 fw-bold border bg-white text-dark">
          <h1 className="text-center">Vendor Registration Page</h1>
            <form >
                <div className="mb-3">
                    <label htmlFor="un" className="form-label ">Enter Username:</label>
                    <input type="text" className="form-control" id="un" name="uid"
                        value={
                            info.uid
                        }
                        onChange={
                            (e) => dispatch({type: 'update', fld: 'uid', val: e.target.value})
                        } required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">Enter Password:</label>
                    <input type="password" className="form-control" id="pwd" name="pwd"
                        value={
                            info.pwd
                        }
                        onChange={
                            (e) => dispatch({type: 'update', fld: 'pwd', val: e.target.value})
                        } required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="nm" className="form-label">Enter Name:</label>
                    <input type="text" className="form-control" id="nm" name="v_name"
                        value={
                            info.v_name
                        }
                        onChange={
                            (e) => dispatch({type: 'update', fld: 'v_name', val: e.target.value})
                        } required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Enter Email:</label>
                    <input type="email" className="form-control" id="email" name="email"
                        value={
                            info.email
                        }
                        onChange={
                            (e) => dispatch({type: 'update', fld: 'email', val: e.target.value})
                        } required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="cno" className="form-label">Enter Contact No:</label>
                    <input type="text" className="form-control" id="cno" name="contact"
                        value={
                            info.contact
                        }
                        onChange={
                            (e) => dispatch({type: 'update', fld: 'contact', val: e.target.value})
                        } required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="ad" className="form-label">Enter Address:</label>
                    <input type="text" className="form-control" id="ad" name="address"
                        value={
                            info.address
                        }
                        onChange={
                            (e) => dispatch({type: 'update', fld: 'address', val: e.target.value})
                        } required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="licenceid" className="form-label">Enter Shop LicenceID:</label>
                    <input type="text" className="form-control" id="licenceid" name="shop_licence_id"
                        value={
                            info.shop_licence_id
                        }
                        onChange={
                            (e) => dispatch({type: 'update', fld: 'shop_licence_id', val: e.target.value})
                        } required/>
                </div>
                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary mb-3"
                        onClick={
                            (e) => {
                                sendData(e)
                            }
                    }>Register</button>
                    <button type="reset" className="btn btn-secondary mb-3"
                        onClick={
                            () => dispatch({type: 'update'})
                    }>Reset</button>
                </div>
            </form>


            <p className="text-center" >{
                JSON.stringify(info)
            }</p>
        </div>
        </div>
    )

}
