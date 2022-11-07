import React from "react";

export default function Navbar(){
    return(
        <div className="navbar">
            <a href="#home-page"  id="homepage" class="nav-link">Name</a>
            <a href="#login"  id="Login" class="nav-link float-right">Sign in</a>
        </div>
    )
}