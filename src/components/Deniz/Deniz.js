import React,{useState} from 'react';
import styles from "./Deniz.module.css";
import {useHistory} from "react-router-dom";
import Card from "../Jumbo/Card/Card";
import Title from "../Title/Title";

import deniz1 from "../Images/deniz1.jpg";
import deniz2 from "../Images/deniz2.jpg";
import deniz3 from "../Images/deniz3.jpg";
import deniz4 from "../Images/deniz4.jpg";
import deniz5 from "../Images/deniz5.jpg";
import deniz6 from "../Images/deniz6.jpg";

function Deniz() {
    const history = useHistory([]);

    const [card,setCard] = useState([
        {
            img : deniz1,
            text: '1 otaqli',
            id: 1,
            url: '/1otaqlideniz'
        },
        {
            img : deniz2,
            text: '2 otaqli',
            id: 2,
            url: '/2otaqlideniz'
        },
        {
            img : deniz3,
            text: '3 otaqli',
            id: 3,
            url: '/3otaqlideniz'
        },
        {
            img : deniz4,
            text: '4 otaqli',
            id: 4,
            url: '/4otaqlideniz'
        },
        {
            img : deniz5,
            text: 'Dubleks',
            id: 5,
            url: '/dubleksdeniz'
        },
        {
            img : deniz6,
            text: 'Tripleks',
            id: 6,
            url: '/tripleksdeniz'
        }
    ])

    const [title,setTitle] = useState(
        {
            img: 'https://i.pinimg.com/originals/cd/99/eb/cd99eb3c53ef511a52003abdd90547cd.jpg',
            title: 'Dəniz Tipli Ev Dekorasiyası'
        }
    )
    const onClick  = (url) => {
        history.push(url)
    }
    return (
        <div className={styles.deniz}>
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
export default Deniz;