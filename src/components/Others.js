import React, { PureComponent, useState } from "react";
import "../styles/components.scss";

function Others() {
    return (  
        <>
        <ul className="list">
            <li>aktywności outdoorowe</li>
           
            <li>fotografia przyrodnicza</li>
            <li>shinrin-yoku</li>
            <li>język angielski</li>
            <li>postęp naukowo-techniczny</li>
            <li>green city, smart city</li>
            <li>programowanie</li>
            <li>antropologia</li>
            <li>mechanika rowerowa, samochodowa</li>
            <li></li>
            <li></li>
            <li></li>
            <div className="image threeFirst"><img src="../../public/img/other1.jpg" alt="" /></div>
        <div className="image threeSecond"><img src="../../public/img/other2.jpg" alt="" /></div>
        <div className="image threeThird"><img src="../../public/img/other3.jpg" alt="" /></div>
        </ul>
        </>
    );
}

export default Others;