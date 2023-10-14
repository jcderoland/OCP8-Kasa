import React, { useState, useEffect } from "react";

function Carousel({ pictures }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prev => (prev + 1) % pictures.length);
        }, 4500); 

        return () => clearInterval(interval);
    }, [pictures]);

    return (
        <div className="imageCarrousel">
            <img src={pictures[currentImageIndex]} alt={`Logement ${currentImageIndex + 1}`} />
            {pictures.length > 1 && (
                <>
                    <button onClick={() => setCurrentImageIndex((prev) => (prev - 1 + pictures.length) % pictures.length)}>
                        <i className="fa-solid fa-less-than"></i>
                    </button>
                    <button onClick={() => setCurrentImageIndex((prev) => (prev + 1) % pictures.length)}>
                        <i className="fa-solid fa-greater-than"></i>
                    </button>
                    <p className="imageIndex">{currentImageIndex + 1}/{pictures.length}</p>
                </>
            )}
        </div>
    );
}

export default Carousel;
