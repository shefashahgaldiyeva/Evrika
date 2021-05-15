import React from 'react';
import styles from "./Onerooms.module.css";
import Gallery from 'react-grid-gallery';

function Fourroom() {
    const IMAGES =
    [{
        src: "http://cdn.home-designing.com/wp-content/uploads/2018/06/bedroom-neon-sign.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2018/06/bedroom-neon-sign.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Interior-glass-walls.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Interior-glass-walls.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Black-kitchen-tiles.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Black-kitchen-tiles.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212    
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Table-centrepiece.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Table-centrepiece.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Black-kitchen-pendant-lights.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Black-kitchen-pendant-lights.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Black-kitchen.1.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Black-kitchen.1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Black-reading-lamp.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Black-reading-lamp.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Decorative-Wall-Hooks.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Decorative-Wall-Hooks.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Bathroom-wall-sconces.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Bathroom-wall-sconces.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Small-shower-room-design.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Small-shower-room-design.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Round-bathroom-mirror.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Round-bathroom-mirror.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Glass-wall-bedroom.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Glass-wall-bedroom.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Black-faucet.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Black-faucet.jpg",
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

export default Fourroom;