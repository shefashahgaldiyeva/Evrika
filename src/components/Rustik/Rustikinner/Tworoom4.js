import React from 'react';
import styles from "./Rustikinner.module.css";
import Gallery from 'react-grid-gallery';

function Tworoom4() {
    const IMAGES =
    [{
        src: "https://adorable-home.com/wp-content/gallery/beautiful-attic-apartment/beautiful-attic-home-2.jpg",
        thumbnail: "https://adorable-home.com/wp-content/gallery/beautiful-attic-apartment/beautiful-attic-home-2.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212 ,
    },
    {
        src: "https://adorable-home.com/wp-content/gallery/beautiful-attic-apartment/beautiful-attic-home-3.jpg",
        thumbnail: "https://adorable-home.com/wp-content/gallery/beautiful-attic-apartment/beautiful-attic-home-3.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/gallery/beautiful-attic-apartment/beautiful-attic-home-4.jpg",
        thumbnail: "https://adorable-home.com/wp-content/gallery/beautiful-attic-apartment/beautiful-attic-home-4.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212    
    },
    {
        src: "https://adorable-home.com/wp-content/gallery/beautiful-attic-apartment/beautiful-attic-home-5.jpg",
        thumbnail: "https://adorable-home.com/wp-content/gallery/beautiful-attic-apartment/beautiful-attic-home-5.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212 ,
    },
    {
        src: "https://adorable-home.com/wp-content/gallery/beautiful-attic-apartment/beautiful-attic-home-6.jpg",
        thumbnail: "https://adorable-home.com/wp-content/gallery/beautiful-attic-apartment/beautiful-attic-home-6.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    
    {
        src: "https://adorable-home.com/wp-content/gallery/beautiful-attic-apartment/beautiful-attic-home-7.jpg",
        thumbnail: "https://adorable-home.com/wp-content/gallery/beautiful-attic-apartment/beautiful-attic-home-7.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/gallery/beautiful-attic-apartment/beautiful-attic-home-18.jpg",
        thumbnail: "https://adorable-home.com/wp-content/gallery/beautiful-attic-apartment/beautiful-attic-home-18.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/gallery/beautiful-attic-apartment/beautiful-attic-home-14.jpg",
        thumbnail: "https://adorable-home.com/wp-content/gallery/beautiful-attic-apartment/beautiful-attic-home-14.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/gallery/beautiful-attic-apartment/beautiful-attic-home-8.jpg",
        thumbnail: "https://adorable-home.com/wp-content/gallery/beautiful-attic-apartment/beautiful-attic-home-8.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/gallery/beautiful-attic-apartment/beautiful-attic-home-17.jpg",
        thumbnail: "https://adorable-home.com/wp-content/gallery/beautiful-attic-apartment/beautiful-attic-home-17.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/gallery/beautiful-attic-apartment/beautiful-attic-home-11.jpg",
        thumbnail: "https://adorable-home.com/wp-content/gallery/beautiful-attic-apartment/beautiful-attic-home-11.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/gallery/beautiful-attic-apartment/beautiful-attic-home-9.jpg",
        thumbnail: "https://adorable-home.com/wp-content/gallery/beautiful-attic-apartment/beautiful-attic-home-9.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/gallery/beautiful-attic-apartment/beautiful-attic-home-10.jpg",
        thumbnail: "https://adorable-home.com/wp-content/gallery/beautiful-attic-apartment/beautiful-attic-home-10.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/gallery/beautiful-attic-apartment/beautiful-attic-home-12.jpg",
        thumbnail: "https://adorable-home.com/wp-content/gallery/beautiful-attic-apartment/beautiful-attic-home-12.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/gallery/beautiful-attic-apartment/beautiful-attic-home-13.jpg",
        thumbnail: "https://adorable-home.com/wp-content/gallery/beautiful-attic-apartment/beautiful-attic-home-13.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/gallery/beautiful-attic-apartment/beautiful-attic-home-1.jpg",
        thumbnail: "https://adorable-home.com/wp-content/gallery/beautiful-attic-apartment/beautiful-attic-home-1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/gallery/beautiful-attic-apartment/beautiful-attic-home-15.jpg",
        thumbnail: "https://adorable-home.com/wp-content/gallery/beautiful-attic-apartment/beautiful-attic-home-15.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/gallery/beautiful-attic-apartment/beautiful-attic-home-16.jpg",
        thumbnail: "https://adorable-home.com/wp-content/gallery/beautiful-attic-apartment/beautiful-attic-home-16.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/gallery/beautiful-attic-apartment/beautiful-attic-home-8.jpg",
        thumbnail: "https://adorable-home.com/wp-content/gallery/beautiful-attic-apartment/beautiful-attic-home-8.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    }]
    return (
        <div className={styles.one}>
            <Gallery images={IMAGES}/>
        </div>
    )
}

export default Tworoom4;