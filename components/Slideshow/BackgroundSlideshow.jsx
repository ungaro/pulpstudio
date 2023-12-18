import React, { useState, useEffect } from 'react';

const images = [
    '/background.jpg',
    '/background1.jpg',
    '/background2.jpg',
    '/background3.jpg',
];
const changeInterval = 5000; // Change image every 5000 milliseconds (5 seconds)
const fadeDuration = 1000; // Duration of fade effect in milliseconds

const BackgroundSlideshow = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [nextImageIndex, setNextImageIndex] = useState(1);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const transitionInterval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentImageIndex(nextImageIndex);
                setNextImageIndex((nextImageIndex + 1) % images.length);
                setFade(true);
            }, fadeDuration);
        }, changeInterval);

        return () => clearInterval(transitionInterval);
    }, [nextImageIndex]);

    return (
        <div style={{ position: 'absolute', height: '100vh', width: '100%', top:0 }}>
            {images.map((image, index) => (
                <div
                    key={image}
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        transition: `opacity ${fadeDuration}ms ease-in-out`,
                        opacity: (index === currentImageIndex && fade) || (index === nextImageIndex && !fade) ? 1 : 0,
                    }}
                />
            ))}
        </div>
    );
};

export default BackgroundSlideshow;