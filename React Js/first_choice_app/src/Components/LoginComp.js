import React, {useReducer, useState} from 'react'
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {login} from './slice';
import './CSS/login.css'
import login1 from './Images/login1.jpg';


export default function LoginComp() {

    const init = {
        uid: "",
        pwd: ""
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
                return init;

        }
    }

    const [info, dispatch] = useReducer(reducer, init);
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const reduxAction = useDispatch();

    const sendData = (e) => {
        e.preventDefault();

        const reqOptions = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(info)
        }
        fetch("http://localhost:8080/loginCheck", reqOptions).then(resp => {
            if (resp.ok) 
                return resp.text();
             else 
                throw new Error("Server Error");
            

        }).then(text => text.length ? JSON.parse(text) : {}).then(obj => {

            if (Object.keys(obj).length === 0) {
                setMsg("Wrong Uid / Pwd");
                alert("Invalid Credentials")
            } else {
                if (obj.status === false) {
                    alert("Request has not been Approved")
                } else {

                    reduxAction(login())
                    localStorage.setItem("loggedUser",JSON.stringify(obj))
                    console.log(obj)
                    if (obj.role_id.role_id === 1) {
                        navigate("/Customer_Home")
                    } else if (obj.role_id.role_id === 2) {
                        navigate("/Vendor_Home")

                    } else if (obj.role_id.role_id === 3) {
                        navigate("/Admin_Home")

                    }
                }
            }
        }).catch((error) => alert("Server Error . Try After Some Time"));
    }

    return (


        <section className="text-center text-lg-start">

            <style> {`
          .rounded-t-5 {
            border-top-left-radius: 0.5rem;
            border-top-right-radius: 0.5rem;
          }
  
          @media (min-width: 992px) {
            .rounded-tr-lg-0 {
              border-top-right-radius: 0;
            }
  
            .rounded-bl-lg-5 {
              border-bottom-left-radius: 0.5rem;
            }
          }
        `} </style>
            <div className="card mb-3 ">
                <div className="row g-0 d-flex align-items-center">

                    <div className="col-lg-4 d-none d-lg-flex">
                        <img src={login1}
                            alt="Trendy Pants and Shoes"
                            className=" rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5 border"
                            style={
                                {
                                    maxWidth: '135%',
                                    // height: ''
                                }
}
/>
                    </div>

                    <div className="container-fluid mt-5 col-5 fw-bold border bg-white text-dark">
                        <h1 style={
                            {textAlign: 'center'}
                        }>Login Page
                        </h1>
                        <div className="card-body py-5 px-md-5">
                            <form> 
                                <div className="form-outline mb-3">
                                    <label className="form-label" htmlFor="uid">Enter Uid</label>
                                    <input type="text" id="uid" className="form-control" name='uid'
                                        value={
                                            info.uid
                                        }
                                        onChange={
                                            (e) => {
                                                dispatch({type: 'update', fld: 'uid', val: e.target.value})
                                            }
                                        } required/>
                                </div>

                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="pwd">Enter Password</label>
                                <input type="password" id="pwd" name='pwd' className="form-control"
                                    value={
                                        info.pwd
                                    }
                                    onChange={
                                        (e) => {
                                            dispatch({type: 'update', fld: 'pwd', val: e.target.value})
                                        }
                                    } required/>
                            </div>

                        {/* 2 column grid layout for inline styling */}
                        <div className="row mb-4">
                            <div className="col d-flex justify-content-center">
                                {/* Checkbox */}
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="form2Example31" defaultChecked/>
                                    <label className="form-check-label" htmlFor="form2Example31">
                                        Remember me
                                    </label>
                                </div>
                            </div>

                            <div className="col">
                                {/* Simple link */}
                                <a href="#!">Forgot password?</a>
                            </div>
                        </div>

                        {/* Submit button */}
                        <button type="submit" className="btn btn-primary btn-block mb-4"
                            onClick={
                                (e) => {
                                    sendData(e)
                                }
                        }>Sign in</button>
                        <button type="reset" className="btn btn-primary btn-block mb-4"
                            onClick={
                                () => {
                                    dispatch({type: 'reset'})
                                }
                        }>Clear</button>

                    </form>
                    <div style={
                        {textAlign: 'center'}
                    }>
                        <p> {
                            JSON.stringify(info)
                        }</p>
                        <p>{msg}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>
    )
}
