const[Admin ,setAdmin] =useState(null);
//     useEffect(()=>{
//   const  l_id=JSON.parse(localStorage.getItem("loggedUser")).l_id;
//         fetch("http://localhost:8080/getAdmin?l_id="+l_id)
//         .then(resp => resp.json())
//         .then(obj => {
//                 localStorage.setItem("loggedAdmin",JSON.stringify(obj))
//                 setAdmin(obj);
//         })
//     },[])