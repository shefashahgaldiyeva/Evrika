import React from 'react';
import styles from "./Klasinner.module.css";
import Gallery from 'react-grid-gallery';

function Threeroom2() {
    const IMAGES =
    [{
        src: "https://adorable-home.com/wp-content/uploads/2020/11/Marvelous-Kyiv-%D0%90partment-1.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/11/Marvelous-Kyiv-%D0%90partment-1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/11/Marvelous-Kyiv-%D0%90partment-3.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/11/Marvelous-Kyiv-%D0%90partment-3.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/11/Marvelous-Kyiv-%D0%90partment-2.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/11/Marvelous-Kyiv-%D0%90partment-2.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,   
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/11/Marvelous-Kyiv-%D0%90partment-4.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/11/Marvelous-Kyiv-%D0%90partment-4.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/11/Marvelous-Kyiv-%D0%90partment-5.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/11/Marvelous-Kyiv-%D0%90partment-5.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/11/Marvelous-Kyiv-%D0%90partment-6.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/11/Marvelous-Kyiv-%D0%90partment-6.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/11/Marvelous-Kyiv-%D0%90partment-7.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/11/Marvelous-Kyiv-%D0%90partment-7.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/11/Marvelous-Kyiv-%D0%90partment-8.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/11/Marvelous-Kyiv-%D0%90partment-8.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/11/Marvelous-Kyiv-%D0%90partment-10.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/11/Marvelous-Kyiv-%D0%90partment-10.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/11/Marvelous-Kyiv-%D0%90partment-9.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/11/Marvelous-Kyiv-%D0%90partment-9.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/11/Marvelous-Kyiv-%D0%90partment-11.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/11/Marvelous-Kyiv-%D0%90partment-11.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/11/Marvelous-Kyiv-%D0%90partment-12.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/11/Marvelous-Kyiv-%D0%90partment-12.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/11/Marvelous-Kyiv-%D0%90partment-13.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/11/Marvelous-Kyiv-%D0%90partment-13.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/11/Marvelous-Kyiv-%D0%90partment-15.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/11/Marvelous-Kyiv-%D0%90partment-15.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/11/Marvelous-Kyiv-%D0%90partment-17.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/11/Marvelous-Kyiv-%D0%90partment-17.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/11/Marvelous-Kyiv-%D0%90partment-16.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/11/Marvelous-Kyiv-%D0%90partment-16.jpg",
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

export default Threeroom2;