import React,{useState} from 'react';
import styles from "./Enenevi.module.css";
import {useHistory} from "react-router-dom";
import Card from "../Jumbo/Card/Card";
import Title from "../Title/Title";

import contentbg from "../Images/contentbg.png";
import enenevi1 from "../Images/enenevi1.jpg";
import enenevi2 from "../Images/enenevi2.jpg";
import enenevi3 from "../Images/enenevi3.jpg";
import enenevi8 from "../Images/enenevi8.jpg";
import enenevi5 from "../Images/enenevi5.jpg";
import enenevi7 from "../Images/enenevi7.jpg";

function Enenevi() {
    const history = useHistory([]);

    const [card,setCard] = useState([
        {
            img : enenevi1,
            text: '1 otaqli',
            id: 1,
            url: '/1otaqlienenevi'
        },
        {
            img : enenevi3,
            text: '2 otaqli',
            id: 2,
            url: '/2otaqlienenevi'
        },
        {
            img : enenevi2,
            text: '3 otaqli',
            id: 3,
            url: '/3otaqlienenevi'
        },
        {
            img : enenevi8,
            text: '4 otaqli',
            id: 4,
            url: '/4otaqlienenevi'
        },
        {
            img : enenevi5,
            text: 'Dubleks',
            id: 5,
            url: '/dubleksenenevi'
        },
        {
            img : enenevi7,
            text: 'Tripleks',
            id: 6,
            url: '/tripleksenenevi'
        }
    ])

    const [title,setTitle] = useState(
        {
            img: 'https://media.designcafe.com/wp-content/uploads/2020/06/22155953/breakrules-with-bohemian-home-decor-ideas.jpg',
            title: 'Ənənəvi Ev Dekorasiyası'
        }
    )
    const onClick  = (url) => {
        history.push(url)
    }
    return (
        <div  className={styles.enenevi}>
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
export default Enenevi;