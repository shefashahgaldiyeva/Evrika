import React from 'react'
import styles from "./Content.module.css";
import contentbg from "../Images/contentbg.png";
import right from "../Images/contentright.jpg";

function Content() {
    return (
        <div className={styles.content} style={{backgroundImage: `url(${contentbg})`}}>
            <div className={styles.inner}>
                <div className={styles.left}>
                    <span>İdeya</span>
                    <p>Hər kəs yaşayış sahəsini gözəlləşdirmək istəyir. Günün çox hissəsini keçirdiyimiz evlərimizin əslində ruhumuzu əks etdirdiyini desək yalan olmaz. Ev dekorasiyası məhz bu anda işə başlayır və nəfəs aldığımız yerləri daha cəlbedici və gözəl göstərir. Hər keçən gün yeni bir trotter ortaya çıxır və moda birdən fərqli bir ölçü alır. Dekorasiyadakı dəyişikliklər hər fikrin əks olunması kimi müşahidə olunur. Təsəvvür dünyasının çox təsirli olduğu ev dekorasiya fikirləri, düzgün həyata keçirildiyi zaman bu cür gözəl şeylər yaşamağınıza səbəb olur. Öz fikirlərinizin işığı altında döşədiyiniz bir evdə yaşamaq və baxdığınız hər yerdə hüzur tapmaq üçün başlasanız daha yaxşı olar. Evinizə sevinc gətirən dekorasiya fikirlərindən burdan yararlana bilərsiniz.</p>
                </div>
                <div className={styles.right}>
                    <img src={right}/>
                </div>
            </div>
        </div>
    )
}
export default Content