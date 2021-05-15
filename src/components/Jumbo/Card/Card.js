import React from 'react'
import cardstyle from "./Card.module.css";

 function Card(props) {
    return (
        <div className={cardstyle.card} onClick={props.click}>
            <div className={cardstyle.bg} style={{backgroundImage: `url(${props.img})`}}>
                
            </div>
            <p>{props.text}</p> 
        </div>
    )
}
export default Card;