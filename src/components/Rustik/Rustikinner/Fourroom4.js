import React from 'react';
import styles from "./Rustikinner.module.css";
import Gallery from 'react-grid-gallery';

function Fourroom4() {
    const IMAGES =
    [{
        src: "https://adorable-home.com/wp-content/uploads/2019/12/USA-Style-Luxurious-Chalet-1.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2019/12/USA-Style-Luxurious-Chalet-1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2019/12/USA-Style-Luxurious-Chalet-2.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2019/12/USA-Style-Luxurious-Chalet-2.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2019/12/USA-Style-Luxurious-Chalet-3.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2019/12/USA-Style-Luxurious-Chalet-3.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212    
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2019/12/USA-Style-Luxurious-Chalet-4.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2019/12/USA-Style-Luxurious-Chalet-4.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2019/12/USA-Style-Luxurious-Chalet-6.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2019/12/USA-Style-Luxurious-Chalet-6.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    
    {
        src: "https://adorable-home.com/wp-content/uploads/2019/12/USA-Style-Luxurious-Chalet-5.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2019/12/USA-Style-Luxurious-Chalet-5.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2019/12/USA-Style-Luxurious-Chalet-7.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2019/12/USA-Style-Luxurious-Chalet-7.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2019/12/USA-Style-Luxurious-Chalet-9.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2019/12/USA-Style-Luxurious-Chalet-9.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2019/12/USA-Style-Luxurious-Chalet-8.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2019/12/USA-Style-Luxurious-Chalet-8.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2019/12/USA-Style-Luxurious-Chalet-11.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2019/12/USA-Style-Luxurious-Chalet-11.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2019/12/USA-Style-Luxurious-Chalet-10.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2019/12/USA-Style-Luxurious-Chalet-10.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2019/12/USA-Style-Luxurious-Chalet-12.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2019/12/USA-Style-Luxurious-Chalet-12.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2019/12/USA-Style-Luxurious-Chalet-13.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2019/12/USA-Style-Luxurious-Chalet-13.jpg",
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

export default Fourroom4;