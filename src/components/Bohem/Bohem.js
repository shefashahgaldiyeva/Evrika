import React,{useState} from 'react';
import styles from "./Bohem.module.css";
import {useHistory} from "react-router-dom";
import Card from "../Jumbo/Card/Card";
import Title from "../Title/Title";

import bohem1 from "../Images/bohem1.jpg";
import bohem2 from "../Images/bohem2.jpg";
import bohem3 from "../Images/bohem3.jpg";
import bohem4 from "../Images/bohem4.jpg";
import bohem5 from "../Images/bohem5.jpg";
import bohem6 from "../Images/bohem6.jpg";

function Bohem() {
    const history = useHistory([]);

    const [card,setCard] = useState([
        {
            img : bohem1,
            text: '1 otaqli',
            id: 1,
            url: '/1otaqlibohem'
        },
        {
            img : bohem2,
            text: '2 otaqli',
            id: 2,
            url: '/2otaqlibohem'
        },
        {
            img : bohem3,
            text: '3 otaqli',
            id: 3,
            url: '/3otaqlibohem'
        },
        {
            img : bohem4,
            text: '4 otaqli',
            id: 4,
            url: '/4otaqlibohem'
        },
        {
            img : bohem5,
            text: 'Dubleks',
            id: 5,
            url: '/dubleksbohem'
        },
        {
            img : bohem6,
            text: 'Tripleks',
            id: 6,
            url: '/tripleksbohem'
        }
    ])

    const [title,setTitle] = useState(
        {
            img: 'https://secureservercdn.net/160.153.137.218/1jo.ebd.myftpupload.com/wp-content/uploads/2020/05/maxresdefault.jpg?time=1604157457',
            title: 'Bohem Ev Dekorasiyası'
        }
    )
    const onClick  = (url) => {
        history.push(url)
    }
    return (
        <div className={styles.bohem}>
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
export default Bohem;