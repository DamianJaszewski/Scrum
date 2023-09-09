import React from "react";
import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

import "./style.css"

function Navbar(){
    return(
        <header class="justify-content-md-between mb-4">
            <div class="myHeader">
                <Link class='nav-link' to='/'>Backlog</Link>
                <Link class='nav-link' to='/sprint'>Sprint</Link>
                <Link class='nav-link' to='/retro'>Retrospective</Link>
                <Link class='nav-link' to='/login'>Login</Link>
                <Link class='nav-link' to='/signup'>Signup</Link>
            </div>
        </header>
    )
}

export default Navbar