import React from 'react';
import styles from "./Onerooms.module.css";
import Gallery from 'react-grid-gallery';

function Dubleks() {
    const IMAGES =
    [{
        src: "https://adorable-home.com/wp-content/uploads/2020/07/Stylish-Black-and-White-Loft-in-Ukraine-1.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/07/Stylish-Black-and-White-Loft-in-Ukraine-1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/07/Stylish-Black-and-White-Loft-in-Ukraine-5.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/07/Stylish-Black-and-White-Loft-in-Ukraine-5.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/07/Stylish-Black-and-White-Loft-in-Ukraine-3.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/07/Stylish-Black-and-White-Loft-in-Ukraine-3.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,   
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/07/Stylish-Black-and-White-Loft-in-Ukraine-2.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/07/Stylish-Black-and-White-Loft-in-Ukraine-2.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/07/Stylish-Black-and-White-Loft-in-Ukraine-4.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/07/Stylish-Black-and-White-Loft-in-Ukraine-4.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/07/Stylish-Black-and-White-Loft-in-Ukraine-6.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/07/Stylish-Black-and-White-Loft-in-Ukraine-6.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/07/Stylish-Black-and-White-Loft-in-Ukraine-8.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/07/Stylish-Black-and-White-Loft-in-Ukraine-8.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/07/Stylish-Black-and-White-Loft-in-Ukraine-7.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/07/Stylish-Black-and-White-Loft-in-Ukraine-7.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2020/07/Stylish-Black-and-White-Loft-in-Ukraine-9.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2020/07/Stylish-Black-and-White-Loft-in-Ukraine-9.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2016/08/White-Loft-Apartment-1.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2016/08/White-Loft-Apartment-1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2016/08/White-Loft-Apartment-2.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2016/08/White-Loft-Apartment-2.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2016/08/White-Loft-Apartment-3.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2016/08/White-Loft-Apartment-3.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2016/08/White-Loft-Apartment-4.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2016/08/White-Loft-Apartment-4.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2016/08/White-Loft-Apartment-6.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2016/08/White-Loft-Apartment-6.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2016/08/White-Loft-Apartment-5.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2016/08/White-Loft-Apartment-5.jpg",
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

export default Dubleks;