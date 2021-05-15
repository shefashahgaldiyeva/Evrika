import React from 'react';
import styles from "./Boheminner.module.css";
import Gallery from 'react-grid-gallery';

function Fourroom5() {
    const IMAGES =
    [{
        src: "https://adorable-home.com/wp-content/uploads/2019/06/D-1-Apartment-3.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2019/06/D-1-Apartment-3.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2019/06/D-1-Apartment-2.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2019/06/D-1-Apartment-2.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2019/06/D-1-Apartment-1.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2019/06/D-1-Apartment-1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212    
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2019/06/D-1-Apartment-5.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2019/06/D-1-Apartment-5.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2019/06/D-1-Apartment-4.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2019/06/D-1-Apartment-4.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    
    {
        src: "https://adorable-home.com/wp-content/uploads/2019/06/D-1-Apartment-6.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2019/06/D-1-Apartment-6.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2019/06/D-1-Apartment-8.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2019/06/D-1-Apartment-8.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2019/06/D-1-Apartment-7.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2019/06/D-1-Apartment-7.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2019/06/D-1-Apartment-11.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2019/06/D-1-Apartment-11.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2019/06/D-1-Apartment-9.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2019/06/D-1-Apartment-9.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2019/06/D-1-Apartment-18.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2019/06/D-1-Apartment-18.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2019/06/D-1-Apartment-10.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2019/06/D-1-Apartment-10.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2019/06/D-1-Apartment-17.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2019/06/D-1-Apartment-17.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2019/06/D-1-Apartment-19.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2019/06/D-1-Apartment-19.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2019/06/D-1-Apartment-13.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2019/06/D-1-Apartment-13.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2019/06/D-1-Apartment-16.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2019/06/D-1-Apartment-16.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2019/06/D-1-Apartment-23.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2019/06/D-1-Apartment-23.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2019/06/D-1-Apartment-21.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2019/06/D-1-Apartment-21.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2019/06/D-1-Apartment-22.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2019/06/D-1-Apartment-22.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    }]
    return (
        <div className={styles.one}>
            <Gallery images={IMAGES}/>
        </div>
    )
}

export default Fourroom5;