import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import styled from "./Klassik.module.css";
import Card from "../Jumbo/Card/Card";
import Title from "../Title/Title";
import Klassikbg from "../Images/klassikbgtitle.jpg";
import Klassik1 from "../Images/klassik1otaq.jpg";
import Klassik2 from "../Images/klassik2.jpg";
import Klassik3 from "../Images/klassik3.jpg";
import Klassik4 from "../Images/klassik4.jpg";
import Klassik5 from "../Images/klassik5.jpg";
import Klassik6 from "../Images/klassik6.jpg";



 function Klassik() {

    const history = useHistory();
     
    const [card,setCard] = useState([
        {
            img : Klassik1,
            text: '1 otaqli',
            id: 1,
            url: '/1otaqliklassik'
        },
        {
            img : Klassik2,
            text: '2 otaqli',
            id: 2,
            url: '/2otaqliklassik'
        },
        {
            img : Klassik3,
            text: '3 otaqli',
            id: 3,
            url: '/3otaqliklassik'
        },
        {
            img : Klassik4,
            text: '4 otaqli',
            id: 4,
            url: '/4otaqliklassik'
        },
        {
            img : Klassik5,
            text: 'Dubleks',
            id: 5,
            url: '/dubleksklassik'
        },
        {
            img : Klassik6,
            text: 'Tripleks',
            id: 6,
            url: '/tripleksklassik'
        } 
    ])

    const [title,setTitle] = useState(
        {
            img: Klassikbg ,
            title: 'Klassik Ev Dekorasiyası'
        }
    )

    const onClick = (url) => {
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
    
export default Klassik;