import React,{ useState} from 'react'
import Card from "./Card/Card";
import jumstyle from "./Jumbo.module.css";
import {Link, useHistory} from "react-router-dom";

import Modern from "../Images/modern.jpg";
import Klassik from "../Images/klassik.jpg";
import Minimalist from "../Images/minimalist.jpg";
import Rustik from "../Images/rustik.jpg";
import Bohem from "../Images/bohem.jpg";
import Ənənəvi from "../Images/ənənəvi.jpg";
import Dəniz from "../Images/deniz.jpg";



function Jumbo() {

    const history = useHistory([]);

    const [card,setCard] = useState([
        {
            img : Modern,
            text: 'Modern Ev Dekorasiyası',
            id : 1,
            url: '/modern'
        },
        {
            img : Klassik,
            text: 'Klassik Ev Dekorasiyası',
            id: 2,
            url: '/klassik'
        },
        {
            img : Minimalist,
            text: 'Minimalist Ev Dekorasiyası',
            id : 3,
            url: '/minimalist'
        },
        {
            img : Rustik,
            text: 'Rustik Ev Dekorasiyası',
            id : 4,
            url: '/rustik'
        },
        {
            img : Bohem,
            text: 'Bohem Ev Dekorasiyası',
            id : 5,
            url: '/bohem'
        },
        {
            img : Ənənəvi,
            text: 'Ənənəvi Ev Dekorasiyası',
            id : 6,
            url: '/ənənəvi'
        },
        {
            img : Dəniz,
            text: 'Dəniz Tipli Ev Dekorasiyası',
            id : 7,
            url: '/dəniz'
        }
    ])

    const onClick = (url) => {
         history.push(url)
    }

    return (
        <div className={jumstyle.jumbo}>
           {
               card.map((c)=> 
                        <Card
                            img={c.img}
                            text={c.text}
                            key={c.id}
                            click={() => onClick(c.url)}
                        />
             )
           }
        </div>
    )
}
export default Jumbo;