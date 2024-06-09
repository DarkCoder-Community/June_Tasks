import React from "react";
import m1 from "../img/m1.jpg";
import img1 from "../img/img1.jpg"
import img2 from "../img/img2.jpg"
import f1 from "../img/f1.jpg";


const Main=() =>{
    return(
        <>
    <main>
        <div className="search">
            <p>Search Items</p>
            <p>Filters</p>
        </div>
        <div className="post">
            <div className="flex ">
             <img  className="dp "alt="profile"src={m1}/>
                <div>
                <h3>Harry Potter</h3>
                <p className="grey">@harrry</p>
                </div>
            </div>
            <div>
                <p className="caption">Hike more. Worry less!!!</p>
                <img className="img"alt="post" src={img1}/>
                  <p>🤍 8.1k  🗨 7.8k  </p>
            </div>
            </div>

            <div className="post">
            <div className="flex ">
             <img  className="dp "alt="profile"src={f1}/>
                <div>
                <h3>Sylvie</h3>
                <p className="grey">@sylvie</p>
                </div>
            </div>
            <div>
                <p className="caption">Hike more. Worry less!!!</p>
                <img className="img"alt="post" src={img2}/>
                  <p>🤍 8.5k  🗨 8.8k  </p>
            </div>
            </div>
    </main>
        </>
    );
};

export default Main;