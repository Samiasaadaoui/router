import React from "react";
import {Link, link,useParams} from "react-router-dom";
const Trailer =({users})=>{
    const {id}=useParams()
    return(
        <div>
        {users.filter((el)=>el.id==id).map((el)=>
            <div key={el.id}>
        <h2>  {el && el.address.street}</h2>
            </div>)}
           <Link to="/clients"><button>go back home</button> </Link> 
        
        </div>
    )
}
export default Trailer;