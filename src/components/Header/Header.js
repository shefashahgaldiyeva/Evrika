import React,{useState} from 'react';
import { BiHomeHeart } from "react-icons/bi";
import styled   from "./Header.module.css";
import Formm from "../Form/Formm";

function Header() {

    const [formm,setFormm] = useState(false)

    function showForm() {
      setFormm(!formm)
      console.log(formm)
    }

    return (
        <div className={styled.nav}>
                <div className={styled.header}>
                    <div className={styled.icon}>
                        <span className={styled.homeicon}><BiHomeHeart/></span>
                        <span>Ev'rika</span>
                    </div>
                    <div className={styled.btn}>
                        <a href='#kateqori'>Kateqoriyalar</a>
                        <button onClick={showForm}>Qeydiyyat / Daxil ol</button>
                    </div>
                </div>
                     {
                          formm ? <Formm/> : null
                     }
        </div>
    )
}

export default Header;