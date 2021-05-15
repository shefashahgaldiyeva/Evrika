import React from 'react';
import styles from "./Rustikinner.module.css";
import Gallery from 'react-grid-gallery';

function Dubleks4() {
    const IMAGES =
    [{
        src: "https://adorable-home.com/wp-content/uploads/2012/10/Perfect-ocean-shore-cottage-1.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2012/10/Perfect-ocean-shore-cottage-1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2012/10/Perfect-ocean-shore-cottage-5.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2012/10/Perfect-ocean-shore-cottage-5.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2012/10/Perfect-ocean-shore-cottage-4.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2012/10/Perfect-ocean-shore-cottage-4.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212    
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2012/10/Perfect-ocean-shore-cottage-3.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2012/10/Perfect-ocean-shore-cottage-3.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2012/10/Perfect-ocean-shore-cottage-6.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2012/10/Perfect-ocean-shore-cottage-6.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    
    {
        src: "https://adorable-home.com/wp-content/uploads/2012/10/Perfect-ocean-shore-cottage-2.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2012/10/Perfect-ocean-shore-cottage-2.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2012/10/Perfect-ocean-shore-cottage-7.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2012/10/Perfect-ocean-shore-cottage-7.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2012/10/Perfect-ocean-shore-cottage-8.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2012/10/Perfect-ocean-shore-cottage-8.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2012/10/Perfect-ocean-shore-cottage-10.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2012/10/Perfect-ocean-shore-cottage-10.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2012/10/Perfect-ocean-shore-cottage-9.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2012/10/Perfect-ocean-shore-cottage-9.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2012/10/Perfect-ocean-shore-cottage-11.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2012/10/Perfect-ocean-shore-cottage-11.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2012/10/Perfect-ocean-shore-cottage-13.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2012/10/Perfect-ocean-shore-cottage-13.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2012/10/Perfect-ocean-shore-cottage-12.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2012/10/Perfect-ocean-shore-cottage-12.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2012/10/Perfect-ocean-shore-cottage-14.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2012/10/Perfect-ocean-shore-cottage-14.jpg",
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

export default Dubleks4;