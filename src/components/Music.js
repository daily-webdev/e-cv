import React, { PureComponent, useState } from "react";
import "../styles/components.scss";

function Music() {
    return (  
        <>
        <ul className="list">
            <li>metal symfoniczny, klasyczny, powermetal</li>
            <li>rock progresywny, alternatywny, hard rock</li>
            <li>indie pop, synth pop</li>
            <li>folk, folk rock</li>
            <li>rap amerykański</li>
            <li>house, drop, rave</li>
            <li>gra na gitarze</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <div className="image threeFirst"><img src="../../public/img/music1.jpg" alt="" /></div>
        <div className="image threeSecond"><img src="../../public/img/music2.jpg" alt="" /></div>
        <div className="image threeThird"><img src="../../public/img/music3.jpg" alt="" /></div>
        </ul>
        </>
    );
}

export default Music;