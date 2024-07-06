import React from 'react';

interface ImageZoomComponentProps {
    src: string;
    alt: string;
    onClose: () => void;
}

const ImageZoomComponent = ({ src, alt, onClose }: ImageZoomComponentProps) => {
    const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
            onClick={handleModalClick}
        >
            <div className="relative max-w-4xl max-h-4xl bg-white rounded-lg p-4 shadow-lg">
                <span
                    className="absolute top-2 right-2 text-xl font-bold cursor-pointer"
                    onClick={onClose}
                >
                    &times;
                </span>
                <img
                    src={src}
                    alt={alt}
                    className="max-w-full max-h-full rounded-lg"
                />
            </div>
        </div>
    );
};

export default ImageZoomComponent;
