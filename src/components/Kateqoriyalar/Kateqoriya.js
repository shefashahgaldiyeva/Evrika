import React from 'react'
import style from "./Kateqoriya.module.css";
import logo from "../Images/indir.svg";

function Kateqoriya() {
    return (
        <div id='kateqori' className={style.category}>
            <p>Kateqoriyalar</p>
            <div className={style.ayric}>
                <img className={style.photo} src={logo}/>
            </div>
        </div>
    )
}
export default Kateqoriya;