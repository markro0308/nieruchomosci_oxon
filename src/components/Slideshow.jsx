import React, { useState, useRef, useEffect } from 'react';
import photo3 from '../images/slajder2.jpg';
import photo2 from '../images/slajder3.jpg';
import photo1 from '../images/slajder4.jpg';

const photos = [photo1, photo2, photo3];
const delay = 5000;

function Slideshow() {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === photos.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow">
            <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {photos.map((image, index) => (
                    <img src={image} alt={index} className="slide" key={index} />
                ))}
            </div>

            <div className="slideshowDots">
                {photos.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Slideshow;