import React, { useRef, useState } from 'react';
import Image from 'next/image';

const HoverImage = ({ src, alt, width, height }) => {
    const imageRef = useRef();
    const [hoverX, setHoverX] = useState(0);
    const [hoverY, setHoverY] = useState(0);

    const handleMouseMove = (event) => {
        // Update hover position based on mouse movement relative to the image container
        const { offsetX, offsetY } = event.nativeEvent;
        setHoverX(offsetX);
        setHoverY(offsetY);
    };

    let centerX = 0;
    let centerY = 0;
    if (imageRef.current) {
        centerX = imageRef.current.offsetWidth / 2;
        centerY = imageRef.current.offsetHeight / 2;
    }

    const deltaX = hoverX - centerX;
    const deltaY = hoverY - centerY;
    const rotateX = ((deltaY / centerY) * 10).toFixed(2);
    const rotateY = ((deltaX / centerX) * 10).toFixed(2);

    return (
        <div
            className="perspective-1000 w-500 h-500 relative overflow-hidden"
            ref={imageRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHoverX(0) && setHoverY(0)}
            onMouseLeave={() => setHoverX(0) && setHoverY(0)}
        >
            <Image
                className="w-full h-full object-cover transition-transform duration-200 ease-out"
                src={src}
                alt={alt}
                width={width}
                height={height}
                style={{
                    transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                }}
            />
        </div>
    );
};

export default HoverImage;
