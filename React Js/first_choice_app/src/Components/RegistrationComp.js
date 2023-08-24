import React from 'react'
import { Link } from 'react-router-dom'

export default function RegistrationComp() {
    return (
        <div  className="container-fluid mt-5 col-4 border bg-white "><br />
        <h2 className="text-center"><b>Registration PageLink</b></h2><br />
            <div className='container-fluid'>
               <form action="">
               <button className="btn btn-primary btn-block mb-4">
                    <Link to="/customerreg" className='nav-link px-3'>
                        <b className='text-warning'>Customer SignUp</b>
                    </Link>
                </button>

                <button className="btn btn-primary btn-block mb-4">
                    <Link to="/vendorreg" className='nav-link px-3'>
                        <b className='text-warning'>Vendor SignUp</b>
                    </Link>
                </button>
               </form>
            </div>

        </div>
    )
}
