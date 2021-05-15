import React, {useState, useEffect} from 'react';
import styles from "./Container.module.css";
import bg from "../Images/homedecorbg.jpg";
import decor from "../Images/decorbg.jpg";




function Container() {

    const [nese,setNese] = useState('')
    const [count,setCount] = useState(0)
    let cumle = 'Kim olduğunu Yaşa.';

    useEffect(() => {
        if (cumle.length > count) {
            handleChange()
        }
    }, [count])

    const handleChange = () => {
            setTimeout(() => {
                setNese(nese + cumle[count]);
                setCount(count + 1);
            }, 200)
    }

    return (
        <div style={{backgroundImage: `url(${decor})`}}  className={styles.container}>
                <span>{nese}</span>
        </div>
    )
}
export default Container;