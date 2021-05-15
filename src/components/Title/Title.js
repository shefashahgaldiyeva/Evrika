import React from 'react'
import styles from "./Title.module.css";

 function Title(props) {
    return (
        <div className={styles.title} style={{backgroundImage: `url(${props.img})`}}>
                <p>{props.title}</p>
        </div>
    )
}
export default Title;