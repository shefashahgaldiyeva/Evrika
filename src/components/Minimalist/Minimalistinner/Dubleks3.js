import React from 'react';
import styles from "./Minimalistinner.module.css";
import Gallery from 'react-grid-gallery';

function Dubleks3() {
    const IMAGES =
    [{
        src: "https://adorable-home.com/wp-content/uploads/2020/03/Minimal-White-and-Yellow-Apartment-in-Portugal-7.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/03/Minimal-White-and-Yellow-Apartment-in-Portugal-7.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/03/Minimal-White-and-Yellow-Apartment-in-Portugal-2.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/03/Minimal-White-and-Yellow-Apartment-in-Portugal-2.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/03/Minimal-White-and-Yellow-Apartment-in-Portugal-3.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/03/Minimal-White-and-Yellow-Apartment-in-Portugal-3.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212    
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/03/Minimal-White-and-Yellow-Apartment-in-Portugal-5.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/03/Minimal-White-and-Yellow-Apartment-in-Portugal-5.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/03/Minimal-White-and-Yellow-Apartment-in-Portugal-4.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/03/Minimal-White-and-Yellow-Apartment-in-Portugal-4.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/03/Minimal-White-and-Yellow-Apartment-in-Portugal-10.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/03/Minimal-White-and-Yellow-Apartment-in-Portugal-10.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/03/Minimal-White-and-Yellow-Apartment-in-Portugal-9.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/03/Minimal-White-and-Yellow-Apartment-in-Portugal-9.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/03/Minimal-White-and-Yellow-Apartment-in-Portugal-6.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/03/Minimal-White-and-Yellow-Apartment-in-Portugal-6.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/gallery/folding-space-solutions-for-tiny-apartments/Folding-space-solutions-2.jpg",
        thumbnail: "https://adorable-home.com/wp-content/gallery/folding-space-solutions-for-tiny-apartments/Folding-space-solutions-2.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/gallery/folding-space-solutions-for-tiny-apartments/Folding-space-solutions-1.jpg",
        thumbnail: "https://adorable-home.com/wp-content/gallery/folding-space-solutions-for-tiny-apartments/Folding-space-solutions-1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/gallery/folding-space-solutions-for-tiny-apartments/Folding-space-solutions-3.jpg",
        thumbnail: "https://adorable-home.com/wp-content/gallery/folding-space-solutions-for-tiny-apartments/Folding-space-solutions-3.jpg",
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

export default Dubleks3;