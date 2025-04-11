import { Level, ImageData } from './types';

// Fisher-Yates shuffle algorithm
const shuffleArray = <T>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

export const gameConfig: Level[] = [
    {
        title: 'Portrait Challenge',
        images: shuffleArray([
            {
                src: '/images/logan_ai.png',
                isAI: true,
                explanation: 'AI-generated portrait with slightly unnatural skin texture and lighting inconsistencies around the hair and face edges.'
            },
            {
                src: '/images/logan.jpg',
                isAI: false,
                explanation: 'Real portrait with natural skin texture and consistent lighting throughout the image.'
            }
        ]),
        layout: 'grid-2'
    },
    {
        title: 'Street Photography',
        images: shuffleArray([
            {
                src: '/images/daniel-alexander_ai.png',
                isAI: true,
                explanation: 'AI-generated street scene with slightly distorted perspective and unusual shadow patterns.'
            },
            {
                src: '/images/daniel-alexander.jpg',
                isAI: false,
                explanation: 'Real street photograph with natural perspective and authentic urban details.'
            },
            {
                src: '/images/woman_child.jpg',
                isAI: false,
                explanation: 'Real street photograph capturing a genuine moment with natural expressions and lighting.'
            }
        ]),
        layout: 'grid-3'
    },
    {
        title: 'Dog Portraits',
        images: shuffleArray([
            {
                src: '/images/Real_Dog_ai.png',
                isAI: true,
                explanation: 'AI-generated dog portrait with slightly unnatural fur texture and inconsistent lighting.'
            },
            {
                src: '/images/Real_Dog.jpg',
                isAI: false,
                explanation: 'Real dog photograph with natural fur texture and authentic lighting.'
            },
            {
                src: '/images/dog_two_ai.png',
                isAI: true,
                explanation: 'AI-generated dog portrait showing subtle inconsistencies in fur pattern and eye details.'
            },
            {
                src: '/images/dog_two.jpg',
                isAI: false,
                explanation: 'Real dog photograph with natural features and authentic details.'
            }
        ]),
        layout: 'grid-4'
    },
    {
        title: 'Rome Landmarks',
        images: shuffleArray([
            {
                src: '/images/rome_ai.png',
                isAI: true,
                explanation: 'AI-generated scene of Rome with slightly distorted architectural details and unusual lighting patterns.'
            },
            {
                src: '/images/rome.heic',
                isAI: false,
                explanation: 'Real photograph of Rome with authentic architectural details and natural lighting.'
            },
            {
                src: '/images/trevi_ai.png',
                isAI: true,
                explanation: 'AI-generated Trevi Fountain with slightly unnatural water flow and architectural inconsistencies.'
            },
            {
                src: '/images/trevi.jpg',
                isAI: false,
                explanation: 'Real photograph of Trevi Fountain with natural water movement and authentic architectural details.'
            }
        ]),
        layout: 'grid-4'
    }
];

// Helper function to create a new level with any number of images
export const createLevel = (title: string, images: ImageData[]): Level => {
    const layout = `grid-${images.length}` as Level['layout'];
    return {
        title,
        images: shuffleArray(images),
        layout
    };
}; 