import React from 'react';
import styles from "./Boheminner.module.css";
import Gallery from 'react-grid-gallery';

function Threeroom5() {
    const IMAGES =
    [{
        src: "https://adorable-home.com/wp-content/uploads/2020/11/Unique-Pink-and-Green-Interior-1.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/11/Unique-Pink-and-Green-Interior-1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/11/Unique-Pink-and-Green-Interior-7.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/11/Unique-Pink-and-Green-Interior-7.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/11/Unique-Pink-and-Green-Interior-3.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/11/Unique-Pink-and-Green-Interior-3.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,    
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/11/Unique-Pink-and-Green-Interior-4.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/11/Unique-Pink-and-Green-Interior-4.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/11/Unique-Pink-and-Green-Interior-6.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/11/Unique-Pink-and-Green-Interior-6.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/11/Unique-Pink-and-Green-Interior-2.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/11/Unique-Pink-and-Green-Interior-2.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/11/Unique-Pink-and-Green-Interior-5.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/11/Unique-Pink-and-Green-Interior-5.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/11/Unique-Pink-and-Green-Interior-8.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/11/Unique-Pink-and-Green-Interior-8.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/11/Unique-Pink-and-Green-Interior-9.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/11/Unique-Pink-and-Green-Interior-9.jpg",
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

export default Threeroom5;