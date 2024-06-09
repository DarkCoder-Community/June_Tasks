import React from "react";
// import "./App.css";
const Navbar=()=>{
    return(
        <>
        <div className="full">
        <div className="nav">
       <div className="box-1"> ClickIt</div>
    <nav> 
        <p>Home</p>
        <p>Notifications</p>
        <p>Shop</p>
        <p>Conversion</p>
        <p>Wallet</p>
        <p>Subscription</p>
        <p>My Profile</p>
        <p>Settings</p>
        <p className="log">Logout</p>
    </nav>
    <div className=" copyright flex justify">
    <p>2024 ClickIt</p>
    <p> ©Muskan Sheikh</p>
    </div>
    </div>
    </div>
</>
    );
};
export default Navbar;