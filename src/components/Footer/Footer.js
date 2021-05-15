import React from 'react';
import styles from "./Footer.module.css";
import footerbg from "../Images/footer.jpg";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";


function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.black}>
                <div className={styles.caption}>
                    <p>Yeni ev dizaynları və daha çox şey haqqında <br></br> ilk xəbərdar olanlardan olun!</p> 
                    <div className={styles.right}>
                        <span>İzlə və paylaş</span>
                        <div className={styles.icon}>
                            <span><FaFacebook/></span>
                            <span><FiInstagram/></span>
                            <span><FiTwitter/></span>
                        </div>
                    </div>
                </div>
               <div>
                   <input type='Email' placeholder='Email ünvanınız'/>
                   <button>Göndər &#8594;</button>
               </div>
            </div>
            <div className={styles.img} style={{backgroundImage: `url(${footerbg})`}}>
                    <div className={styles.zigzag}></div>
                    <p><span>© 2021 Evrika</span>, Inc. Bütün hüquqlar qorunur.</p>
            </div>
        </div>
    )
}
export default Footer;