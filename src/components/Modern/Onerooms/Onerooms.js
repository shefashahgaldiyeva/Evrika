import React from 'react';
import styles from "./Onerooms.module.css";
import Gallery from 'react-grid-gallery';


function Onerooms() {
    const IMAGES =
    [{
            src: "https://a0.muscache.com/im/pictures/7bb3265a-ee75-4b57-a9ea-db3b7002e8e2.jpg?im_w=720",
            thumbnail: "https://a0.muscache.com/im/pictures/7bb3265a-ee75-4b57-a9ea-db3b7002e8e2.jpg?im_w=720",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
    },
    {
            src: "https://a0.muscache.com/im/pictures/c93974e0-ca4a-4c8e-90c6-9eb35fb929c6.jpg?im_w=720",
            thumbnail: "https://a0.muscache.com/im/pictures/c93974e0-ca4a-4c8e-90c6-9eb35fb929c6.jpg?im_w=720",
            thumbnailWidth: 250,
            thumbnailHeight: 330,
    },
    {
            src: "https://a0.muscache.com/im/pictures/e3b05af2-07a4-426e-a6ff-5270073a58b9.jpg?im_w=720",
            thumbnail: "https://a0.muscache.com/im/pictures/e3b05af2-07a4-426e-a6ff-5270073a58b9.jpg?im_w=720",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    },
    {
        src: "https://a0.muscache.com/im/pictures/0ef75575-9017-4fdd-a0b0-8a1ba4f1504f.jpg?im_w=720",
        thumbnail: "https://a0.muscache.com/im/pictures/0ef75575-9017-4fdd-a0b0-8a1ba4f1504f.jpg?im_w=720",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
    {
        src: "https://a0.muscache.com/im/pictures/33ca297f-ba14-481e-9811-de508f9f4d70.jpg?im_w=720",
        thumbnail: "https://a0.muscache.com/im/pictures/33ca297f-ba14-481e-9811-de508f9f4d70.jpg?im_w=720",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    
    {
        src: "https://a0.muscache.com/im/pictures/cd60717e-5e45-45b7-952d-afdbb01e4044.jpg?im_w=1200",
        thumbnail: "https://a0.muscache.com/im/pictures/cd60717e-5e45-45b7-952d-afdbb01e4044.jpg?im_w=1200",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://a0.muscache.com/im/pictures/7d0d7ad9-95a2-44c3-aaa3-c1a361795d2a.jpg?im_w=720",
        thumbnail: "https://a0.muscache.com/im/pictures/7d0d7ad9-95a2-44c3-aaa3-c1a361795d2a.jpg?im_w=720",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://a0.muscache.com/im/pictures/592174ed-839a-4eef-ae9c-6e12072ac2d0.jpg?im_w=1200",
        thumbnail: "https://a0.muscache.com/im/pictures/592174ed-839a-4eef-ae9c-6e12072ac2d0.jpg?im_w=1200",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://a0.muscache.com/im/pictures/299ca7bb-edc2-48b6-84b7-fce59a0845da.jpg?im_w=720",
        thumbnail: "https://a0.muscache.com/im/pictures/299ca7bb-edc2-48b6-84b7-fce59a0845da.jpg?im_w=720",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://a0.muscache.com/im/pictures/8de806b4-d6c6-4d84-9cde-d24b4c8411f0.jpg?im_w=720",
        thumbnail: "https://a0.muscache.com/im/pictures/8de806b4-d6c6-4d84-9cde-d24b4c8411f0.jpg?im_w=720",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://a0.muscache.com/im/pictures/0e547e5a-dfc4-442a-b530-d4a96480fddb.jpg?im_w=720",
        thumbnail: "https://a0.muscache.com/im/pictures/0e547e5a-dfc4-442a-b530-d4a96480fddb.jpg?im_w=720",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://a0.muscache.com/im/pictures/352b386c-5235-4ccf-bda2-cc9f328ce30c.jpg?im_w=1200",
        thumbnail: "https://a0.muscache.com/im/pictures/352b386c-5235-4ccf-bda2-cc9f328ce30c.jpg?im_w=1200",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://a0.muscache.com/im/pictures/9c93f728-06ea-4a06-817e-547f3961c9aa.jpg?im_w=720",
        thumbnail: "https://a0.muscache.com/im/pictures/9c93f728-06ea-4a06-817e-547f3961c9aa.jpg?im_w=720",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://a0.muscache.com/im/pictures/50e53b55-d7b1-407f-9545-9c6f6c7f4a36.jpg?im_w=720",
        thumbnail: "https://a0.muscache.com/im/pictures/50e53b55-d7b1-407f-9545-9c6f6c7f4a36.jpg?im_w=720",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://a0.muscache.com/im/pictures/e9946896-bfef-4e58-8372-baa7b5533388.jpg?im_w=720",
        thumbnail: "https://a0.muscache.com/im/pictures/e9946896-bfef-4e58-8372-baa7b5533388.jpg?im_w=720",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://a0.muscache.com/im/pictures/0a0a5a67-c7ef-49b4-900a-5d0a3cc373dd.jpg?im_w=1200",
        thumbnail: "https://a0.muscache.com/im/pictures/0a0a5a67-c7ef-49b4-900a-5d0a3cc373dd.jpg?im_w=1200",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://a0.muscache.com/im/pictures/137b1cc2-528a-400c-9435-b8fab1053c81.jpg?im_w=720",
        thumbnail: "https://a0.muscache.com/im/pictures/137b1cc2-528a-400c-9435-b8fab1053c81.jpg?im_w=720",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: "https://a0.muscache.com/im/pictures/209770d5-fb30-40f3-a60b-1abfe493c9b1.jpg?im_w=720",
        thumbnail: "https://a0.muscache.com/im/pictures/209770d5-fb30-40f3-a60b-1abfe493c9b1.jpg?im_w=720",
        thumbnailWidth: 250,
        thumbnailHeight: 330,
    },
    {
        src: "https://a0.muscache.com/im/pictures/10733104-cd62-440a-882c-9821984087dd.jpg?im_w=720",
        thumbnail: "https://a0.muscache.com/im/pictures/10733104-cd62-440a-882c-9821984087dd.jpg?im_w=720",
        thumbnailWidth: 320,
        thumbnailHeight: 212
    }]
    return (
        <div className={styles.one}>
            <Gallery images={IMAGES}/>
        </div>
    )
}
export default Onerooms;