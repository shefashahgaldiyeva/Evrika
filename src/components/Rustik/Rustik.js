import React,{useState} from 'react'
import {Link, useHistory} from "react-router-dom";
import styles from "./Rustik.module.css";
import Card from "../Jumbo/Card/Card";
import Title from "../Title/Title";

import rustik1 from "../Images/rustik1.jpg";
import rustik2 from "../Images/rustik2.jpg";
import rustik3 from "../Images/rustik3.jpg";
import rustik4 from "../Images/rustik4.jpg";
import rustik5 from "../Images/rustik5.jpg";
import rustik6 from "../Images/rustik6.jpg";

function Rustik() {

    const history = useHistory([])
    const [card,setCard] = useState([
        {
            img : rustik1,
            text: '1 otaqli',
            id: 1,
            url: '/1otaqlirustik'
        },
        {
            img : rustik2,
            text: '2 otaqli',
            id: 2,
            url: '/2otaqlirustik'
        },
        {
            img : rustik3,
            text: '3 otaqli',
            id: 3,
            url: '/3otaqlirustik'
        },
        {
            img : rustik4,
            text: '4 otaqli',
            id: 4,
            url: '/4otaqlirustik'
        },
        {
            img : rustik5,
            text: 'Dubleks',
            id: 5,
            url: '/dubleksrustik'
        },
        {
            img : rustik6,
            text: 'Tripleks',
            id: 6,
            url: '/tripleksrustik'
        }
    ])

    const [title,setTitle] = useState(
        {
            img: 'https://i.pinimg.com/originals/36/d9/91/36d991f513635f5d323e114496c2fd4a.jpg',
            title: 'Rustik Ev Dekorasiyası'
        }
    )
    const onClick = (url) => {
        history.push(url)
    }

    return (
        <div className={styles.rustik}>
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

export default Rustik;