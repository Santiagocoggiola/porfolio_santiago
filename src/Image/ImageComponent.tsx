import React, { useState, useEffect } from 'react';
import ImageZoomComponent from './ImageZoomComponent';

interface ImageComponentProps {
    src: string;
    alt: string;
    className?: string;
}

const ImageComponent = ({ src, alt, className }: ImageComponentProps) => {
    const [imgExists, setImgExists] = useState(false);
    const [isZoomOpen, setIsZoomOpen] = useState(false);

    useEffect(() => {
        const checkImage = async () => {
            try {
                const response = await fetch(src);
                if (response.ok) {
                    setImgExists(true);
                } else {
                    setImgExists(false);
                }
            } catch (error) {
                setImgExists(false);
            }
        };

        checkImage();
    }, [src]);

    const handleImageClick = () => {
        setIsZoomOpen(true);
    };

    const handleZoomClose = () => {
        setIsZoomOpen(false);
    };

    if (!imgExists) {
        return null;
    }

    return (
        <>
            <img src={src} alt={alt} className={`${className} cursor-pointer`} onClick={handleImageClick} />
            {isZoomOpen && (
                <ImageZoomComponent src={src} alt={alt} onClose={handleZoomClose} />
            )}
        </>
    );
};

export default ImageComponent;
