import React from 'react';
import styles from "./Rustikinner.module.css";
import Gallery from 'react-grid-gallery';

function Tripleks4() {
    const IMAGES =
    [{
        src: "https://adorable-home.com/wp-content/uploads/2018/02/Villa-Gorsky-3.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2018/02/Villa-Gorsky-3.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2018/02/Villa-Gorsky-6.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2018/02/Villa-Gorsky-6.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2018/02/Villa-Gorsky-4.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2018/02/Villa-Gorsky-4.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212    
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2018/02/Villa-Gorsky-5.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2018/02/Villa-Gorsky-5.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2018/02/Villa-Gorsky-7.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2018/02/Villa-Gorsky-7.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    
    {
        src: "https://adorable-home.com/wp-content/uploads/2018/02/Villa-Gorsky-2.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2018/02/Villa-Gorsky-2.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2018/02/Villa-Gorsky-8.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2018/02/Villa-Gorsky-8.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2018/02/Villa-Gorsky-9.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2018/02/Villa-Gorsky-9.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2018/02/Villa-Gorsky-10.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2018/02/Villa-Gorsky-10.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2018/02/Villa-Gorsky-11.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2018/02/Villa-Gorsky-11.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2018/02/Villa-Gorsky-12.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2018/02/Villa-Gorsky-12.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2018/02/Villa-Gorsky-1.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2018/02/Villa-Gorsky-1.jpg",
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

export default Tripleks4;