import React from "react";
import "../Styles/menunavbar.css";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
const Menunavbar = ()=>{

    return(
        <>
        <div className="mnav-div">
<div className="h-top">
    <Link to="/">
    <h1>Riverside Cafe</h1>
    </Link>
<Link to="/">
<button className="logout"><FiLogOut /></button>
</Link>
</div>
        </div>

        </>
    )
}
export default Menunavbar;