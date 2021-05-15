import React from 'react';
import styles from "./Boheminner.module.css";
import Gallery from 'react-grid-gallery';

function Tworoom5() {
    const IMAGES =
    [{
        src: "https://adorable-home.com/wp-content/uploads/2019/08/Small-Swedish-Flat-1.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2019/08/Small-Swedish-Flat-1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2019/08/Small-Swedish-Flat-3.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2019/08/Small-Swedish-Flat-3.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2019/08/Small-Swedish-Flat-2.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2019/08/Small-Swedish-Flat-2.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212    
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2019/08/Small-Swedish-Flat-6.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2019/08/Small-Swedish-Flat-6.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2019/08/Small-Swedish-Flat-9.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2019/08/Small-Swedish-Flat-9.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    
    {
        src: "https://adorable-home.com/wp-content/uploads/2019/08/Small-Swedish-Flat-7.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2019/08/Small-Swedish-Flat-7.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2019/08/Small-Swedish-Flat-12.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2019/08/Small-Swedish-Flat-12.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2019/08/Small-Swedish-Flat-10.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2019/08/Small-Swedish-Flat-10.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2019/08/Small-Swedish-Flat-11.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2019/08/Small-Swedish-Flat-11.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "",
        thumbnail: "",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "",
        thumbnail: "",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "",
        thumbnail: "",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "",
        thumbnail: "",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "",
        thumbnail: "",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "",
        thumbnail: "",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "",
        thumbnail: "",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "",
        thumbnail: "",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "",
        thumbnail: "",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "",
        thumbnail: "",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    }]
    return (
        <div className={styles.one}>
            <Gallery images={IMAGES}/>
        </div>
    )
}

export default Tworoom5;