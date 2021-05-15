import React from 'react';
import styles from "./Eninner.module.css";
import Gallery from 'react-grid-gallery';

function Oneroom6() {
    const IMAGES =
    [{
        src: "https://adorable-home.com/wp-content/uploads/2017/06/Small-Apartment-1.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2017/06/Small-Apartment-1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2017/06/Small-Apartment-4.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2017/06/Small-Apartment-4.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2017/06/Small-Apartment-2.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2017/06/Small-Apartment-2.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212    
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2017/06/Small-Apartment-3.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2017/06/Small-Apartment-3.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2017/06/Small-Apartment-6.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2017/06/Small-Apartment-6.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    
    {
        src: "https://adorable-home.com/wp-content/uploads/2017/06/Small-Apartment-5.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2017/06/Small-Apartment-5.jpg",
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

export default Oneroom6;