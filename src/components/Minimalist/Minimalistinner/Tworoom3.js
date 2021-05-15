import React from 'react';
import styles from "./Minimalistinner.module.css";
import Gallery from 'react-grid-gallery';

function Tworoom3() {
    const IMAGES =
    [{
        src: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Blue-Color-Block-Living-Room-With-Metal-Industrial-Lighting-And-Scandinavian-Accent-chair.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Blue-Color-Block-Living-Room-With-Metal-Industrial-Lighting-And-Scandinavian-Accent-chair.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Gray-Blue-Armless-Chair-And-Scandinavian-Style-Kitchen.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Gray-Blue-Armless-Chair-And-Scandinavian-Style-Kitchen.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Large-Modern-Sky-Blue-Entertainment-Center-For-Tv-Wiith-Storage.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Large-Modern-Sky-Blue-Entertainment-Center-For-Tv-Wiith-Storage.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212    
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Small-Blue-Apartment-With-Modern-Balcony-Garden-And-Wood-Cubby-Storage.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Small-Blue-Apartment-With-Modern-Balcony-Garden-And-Wood-Cubby-Storage.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Minimalist-Eat-In-Kitchen-With-Linear-Suspension-Lighting-And-Small-Oak-Kitchen-Table.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Minimalist-Eat-In-Kitchen-With-Linear-Suspension-Lighting-And-Small-Oak-Kitchen-Table.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Modern-Small-Black-And-White-Bedroom-Design.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Modern-Small-Black-And-White-Bedroom-Design.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Mac-Desktop-Computer-On-Large-Thick-Wooden-Desk-With-Red-Ceramic-Bird.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Mac-Desktop-Computer-On-Large-Thick-Wooden-Desk-With-Red-Ceramic-Bird.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Large-Modern-Built-In-Wooden-Desk-With-Scandinavian-White-Swivel-Chair.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Large-Modern-Built-In-Wooden-Desk-With-Scandinavian-White-Swivel-Chair.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Modern-Small-White-Marble-Bathroom-With-White-And-Blue-Cabinets.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Modern-Small-White-Marble-Bathroom-With-White-And-Blue-Cabinets.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Contemporary-Black-and-White-Guest-Bedroom-With-Home-Office-Workspace.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Contemporary-Black-and-White-Guest-Bedroom-With-Home-Office-Workspace.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Unique-Powder-Blue-TV-Cabinet-With-Storage-And-Shelves.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Unique-Powder-Blue-TV-Cabinet-With-Storage-And-Shelves.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Small-Minimalist-Living-Room-With-Blue-Gray-Couch-And-Black-Industrial-Ceiling-Light.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Small-Minimalist-Living-Room-With-Blue-Gray-Couch-And-Black-Industrial-Ceiling-Light.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Light-Blue-Vintage-Full-Wall-Flat-Panel-Cabinets-In-Modern-Minimalist-Kitchen.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Light-Blue-Vintage-Full-Wall-Flat-Panel-Cabinets-In-Modern-Minimalist-Kitchen.jpg",
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

export default Tworoom3;