import React from "react";
import f2 from "../img/f2.jpg";
import f3 from "../img/f3.jpg";
import m1 from "../img/m1.jpg";


const Aside=()=>{
    return(
        <>
        <aside>           
                 <div className="seller">
                <p>Become a Seller</p>
                </div>
                <div className="flex mar justify ">
                <p>Artists</p>
                <p className="grey">Photographers</p>
                </div>
         <div className="art1">
        <div className="artist flex">
            <img className="dp"alt="profile"src={f2}></img>
            <div >
                <h3>Shizuka</h3>
                <p>@thewildwithyou</p>
                </div>
            </div>
         </div>

{/* 2art */}
         <div className="art2">
        <div className="artist flex">
            <img className="dp"alt="profile"src={f3}></img>
            <div >
                <h3>Yumiko</h3>
                <p>@thewildwithyou</p>
                </div>
            </div>
         </div>
         
        
         <div className="art3">
        <div className="artist flex">
            <img className="dp"alt="profile"src={m1}></img>
            <div >
                <h3>Nobita</h3>
                <p>@thewildwithyou</p>
                </div>
            </div>
         </div>
         </aside>

        </>
    );
};

export default Aside;
