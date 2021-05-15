import React from 'react';
import styles from "./Minimalistinner.module.css";
import Gallery from 'react-grid-gallery';

function Threeroom3() {
    const IMAGES =
    [{
        src: "http://cdn.home-designing.com/wp-content/uploads/2020/11/custom-TV-stand.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2020/11/custom-TV-stand.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2020/11/blue-accent-table.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2020/11/blue-accent-table.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2020/11/glass-wall-bedroom-design.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2020/11/glass-wall-bedroom-design.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212    
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2020/11/bedroom-vanity-1.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2020/11/bedroom-vanity-1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2020/11/blue-side-table.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2020/11/blue-side-table.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2020/11/blue-accent-bedroom.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2020/11/blue-accent-bedroom.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2020/11/hallway-storage-ideas.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2020/11/hallway-storage-ideas.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2020/11/blue-cabinets.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2020/11/blue-cabinets.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2020/11/blue-pendant-light.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2020/11/blue-pendant-light.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2020/11/kitchen-with-peninsula.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2020/11/kitchen-with-peninsula.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2020/11/unique-dining-chairs.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2020/11/unique-dining-chairs.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2020/11/bright-blue-kitchen.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2020/11/bright-blue-kitchen.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2020/11/small-living-room-1.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2020/11/small-living-room-1.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2020/11/blue-sofa-3.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2020/11/blue-sofa-3.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2020/11/unique-pendant-lights.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2020/11/unique-pendant-lights.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2020/11/blue-bedroom-1.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2020/11/blue-bedroom-1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2020/11/live-edge-dining-table.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2020/11/live-edge-dining-table.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2020/11/lounge-chair-and-footstool-set.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2020/11/lounge-chair-and-footstool-set.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2020/11/modern-fireplace-3.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2020/11/modern-fireplace-3.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    }]
    return (
        <div className={styles.one}>
            <Gallery images={IMAGES}/>
        </div>
    )
}

export default Threeroom3;