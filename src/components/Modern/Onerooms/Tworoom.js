import React from 'react';
import styles from "./Onerooms.module.css";
import Gallery from 'react-grid-gallery';

function Tworoom() {
    const IMAGES =
    [{
        src: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Small-Open-Concept-Kitchen-With-Wood-Countertop-Island-And-White-Brick.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Small-Open-Concept-Kitchen-With-Wood-Countertop-Island-And-White-Brick.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Large-Fold-Down-Projector-Screen-With-Blue-Book-Shelves.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Large-Fold-Down-Projector-Screen-With-Blue-Book-Shelves.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Cozy-Blue-Reading-Nook-Off-Of-Minimalist-Eat-In-Kitchen.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Cozy-Blue-Reading-Nook-Off-Of-Minimalist-Eat-In-Kitchen.jpg",
        thumbnailWidth: 320,
        thumbnailHeight:  212,  
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Modern-Eat-In-Kitchen-With-Wooden-Waterfall-Countertop-And-White-Cabinets.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Modern-Eat-In-Kitchen-With-Wooden-Waterfall-Countertop-And-White-Cabinets.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Small-Eat-In-Kitchen-With-White-Brick-Backsplash-White-Cabinets-And-Wooden-Coutertops.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Small-Eat-In-Kitchen-With-White-Brick-Backsplash-White-Cabinets-And-Wooden-Coutertops.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Small-Modern-Blue-Bedroom-With-Navy-Blue-Shelving-And-Throw-Blanket.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Small-Modern-Blue-Bedroom-With-Navy-Blue-Shelving-And-Throw-Blanket.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Modern-White-Kitchen-With-Gray-Walls-And-Large-Wooden-Plank-Flooring.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Modern-White-Kitchen-With-Gray-Walls-And-Large-Wooden-Plank-Flooring.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Modern-Wood-Pull-Out-Accordian-Wall-Small-Apartment-Seperation-Idea.jpg",
        thumbnail: "http://cdn.home-designing.com/wp-content/uploads/2018/06/Modern-Wood-Pull-Out-Accordian-Wall-Small-Apartment-Seperation-Idea.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2016/06/Modern-dark-interiors-3.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2016/06/Modern-dark-interiors-3.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2016/06/Modern-dark-interiors-1.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2016/06/Modern-dark-interiors-1.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2016/06/Modern-dark-interiors-2.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2016/06/Modern-dark-interiors-2.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2016/06/Modern-dark-interiors-4.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2016/06/Modern-dark-interiors-4.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2016/06/Modern-dark-interiors-8.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2016/06/Modern-dark-interiors-8.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2016/06/Modern-dark-interiors-7.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2016/06/Modern-dark-interiors-7.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2016/06/Modern-dark-interiors-5.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2016/06/Modern-dark-interiors-5.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2016/06/Modern-dark-interiors-6.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2016/06/Modern-dark-interiors-6.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2016/06/Modern-dark-interiors-10.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2016/06/Modern-dark-interiors-10.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2016/06/Modern-dark-interiors-9.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2016/06/Modern-dark-interiors-9.jpg",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://adorable-home.com/wp-content/uploads/2016/06/Modern-dark-interiors-12.jpg",
        thumbnail: "https://adorable-home.com/wp-content/uploads/2016/06/Modern-dark-interiors-12.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    }]
    return (
        <div className={styles.one}>
            <Gallery images={IMAGES}/>
        </div>
    )
}

export default Tworoom;