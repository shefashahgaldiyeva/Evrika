import React from 'react';
import styles from "./Klasinner.module.css";
import Gallery from 'react-grid-gallery';

function Oneroom2() {
    const IMAGES =
    [{
        src: "https://adorable-home.com/wp-content/uploads/2020/01/A-Modern-Apartment-with-Vibrant-Pops-of-Orange-3.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/01/A-Modern-Apartment-with-Vibrant-Pops-of-Orange-3.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212, 
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/01/A-Modern-Apartment-with-Vibrant-Pops-of-Orange-1.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/01/A-Modern-Apartment-with-Vibrant-Pops-of-Orange-1.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/01/A-Modern-Apartment-with-Vibrant-Pops-of-Orange-8.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/01/A-Modern-Apartment-with-Vibrant-Pops-of-Orange-8.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,   
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/01/A-Modern-Apartment-with-Vibrant-Pops-of-Orange-5.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/01/A-Modern-Apartment-with-Vibrant-Pops-of-Orange-5.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212, 
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/01/A-Modern-Apartment-with-Vibrant-Pops-of-Orange-2.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/01/A-Modern-Apartment-with-Vibrant-Pops-of-Orange-2.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/01/A-Modern-Apartment-with-Vibrant-Pops-of-Orange-6.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/01/A-Modern-Apartment-with-Vibrant-Pops-of-Orange-6.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/01/A-Modern-Apartment-with-Vibrant-Pops-of-Orange-4.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/01/A-Modern-Apartment-with-Vibrant-Pops-of-Orange-4.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/01/A-Modern-Apartment-with-Vibrant-Pops-of-Orange-9.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/01/A-Modern-Apartment-with-Vibrant-Pops-of-Orange-9.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/01/A-Modern-Apartment-with-Vibrant-Pops-of-Orange-7.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/01/A-Modern-Apartment-with-Vibrant-Pops-of-Orange-7.jpg",
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

export default Oneroom2;