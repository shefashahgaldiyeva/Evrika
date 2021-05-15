import React from 'react';
import styles from "./Onerooms.module.css";
import Gallery from 'react-grid-gallery';

function Tripleks() {
    const IMAGES =
    [{
        src: "https://adorable-home.com/wp-content/uploads/2020/07/Contemporary-Industrial-Style-Flat-1.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/07/Contemporary-Industrial-Style-Flat-1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/07/Contemporary-Industrial-Style-Flat-2.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/07/Contemporary-Industrial-Style-Flat-2.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/07/Contemporary-Industrial-Style-Flat-3.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/07/Contemporary-Industrial-Style-Flat-3.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,   
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/07/Contemporary-Industrial-Style-Flat-4.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/07/Contemporary-Industrial-Style-Flat-4.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/07/Contemporary-Industrial-Style-Flat-6.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/07/Contemporary-Industrial-Style-Flat-6.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/07/Contemporary-Industrial-Style-Flat-5.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/07/Contemporary-Industrial-Style-Flat-5.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/07/Contemporary-Industrial-Style-Flat-8.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/07/Contemporary-Industrial-Style-Flat-8.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/07/Contemporary-Industrial-Style-Flat-7.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/07/Contemporary-Industrial-Style-Flat-7.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/07/Contemporary-Industrial-Style-Flat-9.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/07/Contemporary-Industrial-Style-Flat-9.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/07/Contemporary-Industrial-Style-Flat-6.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/07/Contemporary-Industrial-Style-Flat-6.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/07/Contemporary-Industrial-Style-Flat-13.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/07/Contemporary-Industrial-Style-Flat-13.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/07/Contemporary-Industrial-Style-Flat-10.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/07/Contemporary-Industrial-Style-Flat-10.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/07/Contemporary-Industrial-Style-Flat-17.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/07/Contemporary-Industrial-Style-Flat-17.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/07/Contemporary-Industrial-Style-Flat-11.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/07/Contemporary-Industrial-Style-Flat-11.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/07/Contemporary-Industrial-Style-Flat-15.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/07/Contemporary-Industrial-Style-Flat-15.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/07/Contemporary-Industrial-Style-Flat-12.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/07/Contemporary-Industrial-Style-Flat-12.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/07/Contemporary-Industrial-Style-Flat-16.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/07/Contemporary-Industrial-Style-Flat-16.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/07/Contemporary-Industrial-Style-Flat-19.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/07/Contemporary-Industrial-Style-Flat-19.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/07/Contemporary-Industrial-Style-Flat-18.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/07/Contemporary-Industrial-Style-Flat-18.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    }]
    return (
        <div className={styles.one}>
            <Gallery images={IMAGES}/>
        </div>
    )
}

export default Tripleks;