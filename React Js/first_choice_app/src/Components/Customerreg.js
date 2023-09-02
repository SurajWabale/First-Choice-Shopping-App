import React, { useState } from "react";
import img2 from './Images/img2.jpg'


export default function Customerreg() {
    const [formData, setFormData] = useState({
        uid: "",
        pwd: "",
        c_name: "",
        email: "",
        contact: "",
        address: ""
    });

    const [validationErrors, setValidationErrors] = useState({
        uid: "",
        pwd: "",
        c_name: "",
        email: "",
        contact: "",
        address: ""
    });

    const [showPassword, setShowPassword] = useState(false);
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        const errors = { ...validationErrors };

        switch (name) {
            case "uid":
                errors.uid = value.trim() === "" ? "Username is required." : "";
                break;
            case "pwd":
                const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;
                errors.pwd = !passwordRegex.test(value) ? "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, 1 special character, and be at least 8 characters long." : "";
                break;
            case "c_name":
                errors.c_name = value.trim() === "" ? "Name is required." : !value.includes(" ") ? "Please enter both first and last names separated by a space." : "";
                break;
            case "email":
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                errors.email = !emailRegex.test(value) ? "Please enter a valid email address." : "";
                break;
            case "contact":
                const mobileRegex = /^\d{10}$/;
                errors.contact = value.trim() === "" ? "Contact number is required." : !mobileRegex.test(value) ? "Please enter a 10-digit mobile number." : "";
                break;
            case "address":
                errors.address = value.trim() === "" ? "Address is required." : "";
                break;
            default:
                break;
        }
        setValidationErrors(errors);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = { ...validationErrors };
        let isValid = true;
        for (const key in formData) {
            if (formData.hasOwnProperty(key)) {
                const value = formData[key];
                switch (key) {
                    case "uid":
                        errors.uid = value.trim() === "" ? "Username is required." : "";
                        break;
                    case "pwd":
                        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;
                        errors.pwd = !passwordRegex.test(value) ? "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, 1 special character, and be at least 8 characters long." : "";
                        break;
                    case "c_name":
                        errors.c_name = value.trim() === "" ? "Name is required." : !value.includes(" ") ? "Please enter both first and last names separated by a space." : "";
                        break;
                    case "email":
                        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                        errors.email = !emailRegex.test(value) ? "Please enter a valid email address." : "";
                        break;
                    case "contact":
                        const mobileRegex = /^\d{10}$/;
                        errors.contact = value.trim() === "" ? "Contact number is required." : !mobileRegex.test(value) ? "Please enter a 10-digit mobile number." : "";
                        break;
                    case "address":
                        errors.address = value.trim() === "" ? "Address is required." : "";
                        break;
                    default:
                        break;
                }
                if (errors[key] !== "") {
                    isValid = false;
                }
            }
        }
        setValidationErrors(errors);
        if (isValid) {
            // Perform the API request here
            const reqOptions = {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(formData)
            };
            
            fetch("http://localhost:8080/regCustomer", reqOptions)
                .then(resp => resp.json())
                .then(data => {
                    console.log("Response from server:", data);
                    setRegistrationSuccess(true);
                    setTimeout(() => {
                        setRegistrationSuccess(false);
                    }, 5000);
                    window.location.href="/login";
                })
                .catch(error => {
                    console.error("Error:", error);
                });
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '100vh'  }}>
        <div className="container-fluid mt-5 col-5 fw-bold border bg-white text-dark">
            <h1>Registration Page</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="un" className="form-label">Enter Username:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="un"
                        name="uid"
                        value={formData.uid}
                        onChange={handleChange}
                        required
                    />
                    <div className="text-danger">{validationErrors.uid}</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">Enter Password:</label>
                    <div className="input-group">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="form-control"
                            id="pwd"
                            name="pwd"
                            value={formData.pwd}
                            onChange={handleChange}
                            required
                        />
                        <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                    <div className="text-danger">{validationErrors.pwd}</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="nm" className="form-label">Enter Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nm"
                        name="c_name"
                        value={formData.c_name}
                        onChange={handleChange}
                        required
                    />
                    <div className="text-danger">{validationErrors.c_name}</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Enter Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <div className="text-danger">{validationErrors.email}</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="cno" className="form-label">Enter Contact No:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="cno"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        required
                    />
                    <div className="text-danger">{validationErrors.contact}</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="ad" className="form-label">Enter Address:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="ad"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                    <div className="text-danger">{validationErrors.address}</div>
                </div>
                <button type="submit" className="btn btn-primary mb-3">Register</button>
                <button type="reset" className="btn btn-primary mb-3 ms-2">Reset</button>
            </form>
            {registrationSuccess && (
                <div className="alert alert-success mt-3">
                    Successfully Registered!
                </div>
            )}
        </div>
        </div>
    );
}