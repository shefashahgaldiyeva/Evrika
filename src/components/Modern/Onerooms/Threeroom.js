import React from 'react';
import styles from "./Onerooms.module.css";
import Gallery from 'react-grid-gallery';

 function Threeroom() {
    const IMAGES =
    [{
        src: "https://adorable-home.com/wp-content/uploads/2020/05/Taiwan-Apartment-8.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/05/Taiwan-Apartment-8.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/05/Taiwan-Apartment-2.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/05/Taiwan-Apartment-2.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/05/Taiwan-Apartment-3.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/05/Taiwan-Apartment-3.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,   
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/05/Taiwan-Apartment-4.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/05/Taiwan-Apartment-4.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/05/Taiwan-Apartment-6.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/05/Taiwan-Apartment-6.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/05/Taiwan-Apartment-5.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/05/Taiwan-Apartment-5.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/05/Taiwan-Apartment-9.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/05/Taiwan-Apartment-9.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/05/Taiwan-Apartment-7.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/05/Taiwan-Apartment-7.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/05/Taiwan-Apartment-1.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/05/Taiwan-Apartment-1.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/05/Taiwan-Apartment-10.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/05/Taiwan-Apartment-10.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/05/Taiwan-Apartment-11.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/05/Taiwan-Apartment-11.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/05/Taiwan-Apartment-12.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/05/Taiwan-Apartment-12.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/05/Taiwan-Apartment-14.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/05/Taiwan-Apartment-14.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/05/Taiwan-Apartment-13.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/05/Taiwan-Apartment-13.jpg",
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
export default Threeroom;