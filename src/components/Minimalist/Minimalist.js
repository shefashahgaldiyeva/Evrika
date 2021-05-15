import React,{useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import styles from "./Minimalist.module.css";
import Card from "../Jumbo/Card/Card";
import Title from "../Title/Title";

import minimalist1 from "../Images/minimalist1.jpg";
import minimalist2 from "../Images/minimalist2.jpg";
import minimalist3 from "../Images/minimalist3.jpg";
import minimalist4 from "../Images/minimalist4.jpg";
import minimalist5 from "../Images/minimalist5.jpg";
import minimalist6 from "../Images/minimalist6.jpg";

 function Minimalist() {
     
    const history = useHistory([]);

    const [card,setCard] = useState([
        {
            img : minimalist1,
            text: '1 otaqli',
            id: 1,
            url: '/1otaqliminimalist'
        },
        {
            img : minimalist2,
            text: '2 otaqli',
            id: 2,
            url: '/2otaqliminimalist'
        },
        {
            img : minimalist3,
            text: '3 otaqli',
            id: 3,
            url: '/3otaqliminimalist'
        },
        {
            img : minimalist4,
            text: '4 otaqli',
            id: 4,
            url: '/4otaqliminimalist'
        },
        {
            img : minimalist6,
            text: 'Dubleks',
            id: 5,
            url: '/dubleksminimalist'
        },
        {
            img : minimalist5,
            text: 'Tripleks',
            id: 6,
            url: '/tripleksminimalist'
        }
    ])

    const [title,setTitle] = useState(
        {
            img: 'https://www.tiq.com.sg/wp-content/uploads/2020/05/featured-image-resized-768x402.jpg',
            title: 'Minimalist Ev Dekorasiyası'
        }
    )
    const onClick  = (url) => {
        history.push(url)
    }
    return (
        <div className={styles.minimalist}>
        <div className={styles.title}>
             <Title img={title.img} title={title.title}/>
        </div>
        <div  className={styles.bg}>
        <div  className={styles.category}>
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
export default Minimalist;