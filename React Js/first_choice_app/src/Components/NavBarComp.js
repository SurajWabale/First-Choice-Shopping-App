// import React from 'react'
// import { useSelector } from 'react-redux';
// import {Link} from 'react-router-dom'

// export default function NavBarComp() {
//     const mystate = useSelector((state)=>state.logged);

//     return (
//         <div style={
//                 {
//                     display: mystate.loggedIn ? "none" : "block"
//                 }
//             }>
//                 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//                     <div className="collapse navbar-collapse" id="navbarNav">
//                         <ul className="navbar-nav">
//                             <Link to="/" className='nav-link px-3'>
//                                 <b className='text-warning'>First Choice</b>
//                             </Link>
//                             <li className="nav-item ">
//                                 <Link to="/" className='nav-link px-3'>Home</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link to="/login" className='nav-link px-3'>Login</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link to="/registration" className='nav-link px-3'>Registration</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link to="/" className='nav-link px-3'>About</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link to="/" className='nav-link px-3'>Contact</Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </nav>
//             </div> 
//     )
// }
