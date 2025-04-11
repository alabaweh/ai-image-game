import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { CollageProps } from '../types';

const CollageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    max-width: 1200px;
    margin: 0 auto;
`;

const CollageItem = styled(motion.div)<{ 
    isSelected: boolean; 
    isChecking: boolean; 
    isCorrect: boolean;
    totalImages: number;
}>`
    position: relative;
    cursor: pointer;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    background: ${props => props.isSelected ? 'rgba(74, 144, 226, 0.1)' : 'white'};
    border: 2px solid ${props => {
        if (props.isChecking) {
            return props.isCorrect ? '#4CAF50' : '#f44336';
        }
        return props.isSelected ? '#4a90e2' : 'transparent';
    }};
    width: ${props => {
        if (props.totalImages <= 2) return '45%';
        if (props.totalImages <= 3) return '30%';
        return '22%';
    }};
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;

    &:hover {
        transform: scale(1.02);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    }

    ${props => props.isSelected && `
        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(74, 144, 226, 0.1);
            z-index: 1;
        }
    `}
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s ease;

    ${CollageItem}:hover & {
        transform: scale(1.05);
    }
`;

const NumberBadge = styled(motion.div)<{ isSelected: boolean }>`
    position: absolute;
    top: 10px;
    left: 10px;
    background: ${props => props.isSelected ? '#4a90e2' : 'rgba(0, 0, 0, 0.6)'};
    color: white;
    padding: 0.5rem;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 0.9rem;
    z-index: 2;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Collage: React.FC<CollageProps> = ({ images, selectedImages, onSelect, isChecking, correctAnswers }) => {
    const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

    const handleImageLoad = (index: number) => {
        setLoadedImages(prev => {
            const newSet = new Set(prev);
            newSet.add(index);
            return newSet;
        });
    };

    const handleImageError = (index: number) => {
        console.error(`Failed to load image at index ${index}`);
    };

    return (
        <CollageContainer>
            {images.map((image, index) => {
                const isSelected = selectedImages.has(index);
                const isCorrect = correctAnswers?.has(index) || false;

                return (
                    <CollageItem
                        key={index}
                        isSelected={isSelected}
                        isChecking={isChecking}
                        isCorrect={isCorrect}
                        onClick={() => onSelect(index)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        totalImages={images.length}
                    >
                        <NumberBadge
                            isSelected={isSelected}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 500 }}
                        >
                            {index + 1}
                        </NumberBadge>
                        <Image
                            src={image.src}
                            alt={`Image ${index + 1}`}
                            onLoad={() => handleImageLoad(index)}
                            onError={() => handleImageError(index)}
                        />
                    </CollageItem>
                );
            })}
        </CollageContainer>
    );
}; 