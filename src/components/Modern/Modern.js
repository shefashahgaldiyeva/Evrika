import React,{useState} from 'react'
import {Link, useHistory} from "react-router-dom";
import { Switch, Route } from 'react-router-dom';
import styled from "./Modern.module.css";
import Card from "../Jumbo/Card/Card";
import Title from "../Title/Title";
import bg from "../Images/trapesbg.jpg";
import modern1otaq from "../Images/modern1otaq.jpg";
import modern2otaq from "../Images/modern2otaq.jpg";
import modern3 from "../Images/modern3.jpg";
import modern4 from "../Images/modern4.jpg";
import modern5 from "../Images/modern5.jpg";
import modern6 from "../Images/modern6.jpg";



function Modern() {

    const history = useHistory([]);

    const [card,setCard] = useState([
        {
            img : modern1otaq,
            text: '1 otaqli',
            id: 1,
            url: '/1otaqlimodern'
        },
        {
            img : modern2otaq,
            text: '2 otaqli',
            id: 2,
            url: '/2otaqlimodern'
        },
        {
            img : modern3,
            text: '3 otaqli',
            id: 3,
            url: '/3otaqlimodern'
        },
        {
            img : modern4,
            text: '4 otaqli',
            id: 4,
            url: '/4otaqlimodern'
        },
        {
            img : modern5,
            text: 'Dubleks',
            id: 5,
            url: '/dubleksmodern'
        },
        {
            img : modern6,
            text: 'Tripleks',
            id: 6,
            url: '/tripleksmodern'
        }
    ])

    const [title,setTitle] = useState(
        {
            img: 'https://media-exp1.licdn.com/dms/image/C4E1BAQETnkXn_sGwyQ/company-background_10000/0/1542755927428?e=2159024400&v=beta&t=6girliMaqM1BrRD4PYYIQybZNgsCPcnuMl5NINsi7IM',
            title: 'Modern Ev Dekorasiyası'
        }
    )

    const onClick  = (url) => {
        history.push(url)
    }
    return (
        <div className={styled.modern}>
           <div className={styled.title}>
                <Title img={title.img} title={title.title}/>
           </div>
           <div  className={styled.bg}>
           <div  className={styled.category}>
                {
                    card.map((c)=> (
                                <Card
                                    img={c.img}
                                    text={c.text}
                                    key={c.id}
                                    click={() => onClick(c.url)}
                                />
                    ))
                }
           </div>
           </div>
        </div>
    )
}
export default Modern;