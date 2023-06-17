import React, { PureComponent, useState } from "react";
import "../styles/components.scss";

function Green() {
    return (  
        <>
        <ul className="list">
            <li>urban forestry</li>
            <li>dendrologia</li>
            <li>arborystyka</li>
            <li>ornitologia</li>
            <li>geografia</li>
            <li>meteorologia</li>
            <li>leśnictwo</li>
            <li>fizyka</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <div className="image threeFirst"><img src="../../public/img/green1.jpg" alt="" /></div>
        <div className="image threeSecond"><img src="../../public/img/green2.jpg" alt="" /></div>
        <div className="image threeThird"><img src="../../public/img/green3.jpg" alt="" /></div>
        </ul>
        </>
    );
}

export default Green;