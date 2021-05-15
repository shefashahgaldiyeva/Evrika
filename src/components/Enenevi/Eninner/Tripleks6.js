import React from 'react';
import styles from "./Eninner.module.css";
import Gallery from 'react-grid-gallery';

function Tripleks6() {
    const IMAGES =
    [{
        src: "https://wacdn-img3.secure.footprint.net/media/8879/9.jpg?v=636888601380000000",
        thumbnail: "https://wacdn-img3.secure.footprint.net/media/8879/9.jpg?v=636888601380000000",
        thumbnailWidth: 320,
        thumbnailHeight: 212 ,
    },
    {
        src: "https://wacdn-img3.secure.footprint.net/media/14426/family-room-designs-in-pa-new-homes.jpg?v=636888601380000000",
        thumbnail: "https://wacdn-img3.secure.footprint.net/media/14426/family-room-designs-in-pa-new-homes.jpg?v=636888601380000000",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://wacdn-img3.secure.footprint.net/media/8888/18.jpg?v=636888601380000000",
        thumbnail: "https://wacdn-img3.secure.footprint.net/media/8888/18.jpg?v=636888601380000000",
        thumbnailWidth: 320,
        thumbnailHeight: 212,   
    },
    {
        src: "https://wacdn-img3.secure.footprint.net/media/15705/unique-great-room-design-custom-home-by-landmark-homes.jpg?v=636995774530000000",
        thumbnail: "https://wacdn-img3.secure.footprint.net/media/15705/unique-great-room-design-custom-home-by-landmark-homes.jpg?v=636995774530000000",
        thumbnailWidth: 320,
        thumbnailHeight: 212 ,
    },
    {
        src: "https://wacdn-img3.secure.footprint.net/media/15702/open-living-space-design-by-landmark-homes.jpg?v=636934214310000000",
        thumbnail: "https://wacdn-img3.secure.footprint.net/media/15702/open-living-space-design-by-landmark-homes.jpg?v=636934214310000000",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    
    {
        src: "https://wacdn-img3.secure.footprint.net/media/14450/vaulted-ceiling-wood-beams-great-room-landmark-homes-pa.jpg?v=636888600170000000",
        thumbnail: "https://wacdn-img3.secure.footprint.net/media/14450/vaulted-ceiling-wood-beams-great-room-landmark-homes-pa.jpg?v=636888600170000000",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://wacdn-img3.secure.footprint.net/media/14448/triple-windows-and-fireplace-in-family-room-landmark-homes.jpg?v=636888600160000000",
        thumbnail: "https://wacdn-img3.secure.footprint.net/media/14448/triple-windows-and-fireplace-in-family-room-landmark-homes.jpg?v=636888600160000000",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://wacdn-img3.secure.footprint.net/media/14449/two-story-great-room-design-by-landmark-homes.jpg?v=636888600170000000",
        thumbnail: "https://wacdn-img3.secure.footprint.net/media/14449/two-story-great-room-design-by-landmark-homes.jpg?v=636888600170000000",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://wacdn-img3.secure.footprint.net/media/14447/see-thru-fireplace-in-family-room-new-homes-pa.jpg?v=636888600160000000",
        thumbnail: "https://wacdn-img3.secure.footprint.net/media/14447/see-thru-fireplace-in-family-room-new-homes-pa.jpg?v=636888600160000000",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://wacdn-img3.secure.footprint.net/media/8886/16.jpg?v=636888600610000000",
        thumbnail: "https://wacdn-img3.secure.footprint.net/media/8886/16.jpg?v=636888600610000000",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://wacdn-img3.secure.footprint.net/media/14446/open-great-room-with-columns-new-homes-pa.jpg?v=636888600610000000",
        thumbnail: "https://wacdn-img3.secure.footprint.net/media/14446/open-great-room-with-columns-new-homes-pa.jpg?v=636888600610000000",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://wacdn-img3.secure.footprint.net/media/14444/open-floor-plan-new-home-for-sale-landmark-homes.jpg?v=636888601390000000",
        thumbnail: "https://wacdn-img3.secure.footprint.net/media/14444/open-floor-plan-new-home-for-sale-landmark-homes.jpg?v=636888601390000000",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://wacdn-img3.secure.footprint.net/media/14439/new-home-for-sale-in-pa-family-room.jpg?v=636888601390000000",
        thumbnail: "https://wacdn-img3.secure.footprint.net/media/14439/new-home-for-sale-in-pa-family-room.jpg?v=636888601390000000",
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

export default Tripleks6;