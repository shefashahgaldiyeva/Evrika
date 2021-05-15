import React from 'react';
import styles from "./Eninner.module.css";
import Gallery from 'react-grid-gallery';

function Dubleks6() {
    const IMAGES =
    [{
        src: "https://adorable-home.com/wp-content/uploads/2016/02/Dream-Cottage-Fireplace.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2016/02/Dream-Cottage-Fireplace.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2016/02/Dream-Cottage-Renovation-15.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2016/02/Dream-Cottage-Renovation-15.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2016/02/Living-dining-room.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2016/02/Living-dining-room.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212    
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2016/02/Dream-Cottage-Renovation.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2016/02/Dream-Cottage-Renovation.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2016/02/Dream-Cottage-Staircase-4.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2016/02/Dream-Cottage-Staircase-4.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    
    {
        src: "https://adorable-home.com/wp-content/uploads/2016/02/Dream-Cottage-Renovation-12.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2016/02/Dream-Cottage-Renovation-12.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2016/02/Couch-Coffe-table.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2016/02/Couch-Coffe-table.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2016/02/Dream-Cottage-decor-11.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2016/02/Dream-Cottage-decor-11.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2016/02/Dream-Cottage-Closet.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2016/02/Dream-Cottage-Closet.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2016/02/Vintage-Chest-of-drawers.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2016/02/Vintage-Chest-of-drawers.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2016/02/Dream-Cottage-Decor-13.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2016/02/Dream-Cottage-Decor-13.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2016/02/Dream-Cottage-Decor.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2016/02/Dream-Cottage-Decor.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2016/02/Vintage-side-table-5.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2016/02/Vintage-side-table-5.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2016/02/Dream-Cottage-Renovation-Bathroom.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2016/02/Dream-Cottage-Renovation-Bathroom.jpg",
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

export default Dubleks6;