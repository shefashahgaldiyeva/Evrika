import React from 'react';
import styles from "./Minimalistinner.module.css";
import Gallery from 'react-grid-gallery';

function Oneroom3() {
    const IMAGES =
    [{
        src: "https://adorable-home.com/wp-content/uploads/2016/11/Scandinavian-Style-Living-Room-1.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2016/11/Scandinavian-Style-Living-Room-1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2016/11/Scandinavian-Style-Living-Room-6.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2016/11/Scandinavian-Style-Living-Room-6.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2016/11/Scandinavian-Style-Living-Room-2.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2016/11/Scandinavian-Style-Living-Room-2.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212    
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2016/11/Scandinavian-Style-Living-Room-4.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2016/11/Scandinavian-Style-Living-Room-4.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2016/11/Scandinavian-Style-Living-Room-5.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2016/11/Scandinavian-Style-Living-Room-5.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    
    {
        src: "https://adorable-home.com/wp-content/uploads/2016/11/Scandinavian-Style-Living-Room-3.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2016/11/Scandinavian-Style-Living-Room-3.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2016/11/Scandinavian-Style-Living-Room-8.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2016/11/Scandinavian-Style-Living-Room-8.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2016/11/Scandinavian-Style-Living-Room-9.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2016/11/Scandinavian-Style-Living-Room-9.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2016/11/Scandinavian-Style-Living-Room-7.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2016/11/Scandinavian-Style-Living-Room-7.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2018/08/Cozy-Studio-1.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2018/08/Cozy-Studio-1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2018/08/Cozy-Studio-8.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2018/08/Cozy-Studio-8.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2018/08/Cozy-Studio-7.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2018/08/Cozy-Studio-7.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2018/08/Cozy-Studio-3.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2018/08/Cozy-Studio-3.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2018/08/Cozy-Studio-6.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2018/08/Cozy-Studio-6.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2018/08/Cozy-Studio-5.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2018/08/Cozy-Studio-5.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2018/08/Cozy-Studio-2.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2018/08/Cozy-Studio-2.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2018/08/Cozy-Studio-9.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2018/08/Cozy-Studio-9.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2018/08/Cozy-Studio-10.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2018/08/Cozy-Studio-10.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2018/08/Cozy-Studio-11.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2018/08/Cozy-Studio-11.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    }]
    return (
        <div className={styles.one}>
            <Gallery images={IMAGES}/>
        </div>
    )
}

export default Oneroom3;