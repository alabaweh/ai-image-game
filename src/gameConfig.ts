import { Level, ImageData } from './types';

export interface GameConfig {
    levels: Level[];
}

// Fisher-Yates shuffle algorithm
const shuffleArray = <T>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

export const gameConfig: GameConfig = {
    levels: [
        {
            id: 1,
            title: 'Level 1: Parrot',
            layout: 'grid-2',
            images: [
                {
                    id: 1,
                    src: '/images/parrot.jpg',
                    isAI: false,
                    explanation: 'This is a real photograph of a parrot. Notice the natural feather details, lighting, and depth of field.'
                },
                {
                    id: 2,
                    src: '/images/parrot_ai.png',
                    isAI: true,
                    explanation: 'This is an AI-generated image. Look for inconsistencies in feather patterns, lighting, and overall composition.'
                }
            ]
        },
        {
            id: 2,
            title: 'Level 2: Kraken',
            layout: 'grid-2',
            images: [
                {
                    id: 1,
                    src: '/images/kraken.png',
                    isAI: false,
                    explanation: 'This is a real photograph of a kraken. Notice the natural water movement and lighting.'
                },
                {
                    id: 2,
                    src: '/images/kraken_ai.png',
                    isAI: true,
                    explanation: 'This is an AI-generated image. Look for inconsistencies in water patterns and lighting effects.'
                }
            ]
        },
        {
            id: 3,
            title: 'Level 3: Pizza',
            layout: 'grid-2',
            images: [
                {
                    id: 1,
                    src: '/images/pizza.jpg',
                    isAI: false,
                    explanation: 'This is a real photograph of a pizza. Notice the natural texture of the ingredients and lighting.'
                },
                {
                    id: 2,
                    src: '/images/pizza_ai.png',
                    isAI: true,
                    explanation: 'This is an AI-generated image. Look for inconsistencies in food textures and lighting.'
                }
            ]
        },
        {
            id: 4,
            title: 'Level 4: Ice Cream',
            layout: 'grid-2',
            images: [
                {
                    id: 1,
                    src: '/images/ice_cream.jpg',
                    isAI: false,
                    explanation: 'This is a real photograph of ice cream. Notice the natural texture and melting details.'
                },
                {
                    id: 2,
                    src: '/images/ice_cream_ai.png',
                    isAI: true,
                    explanation: 'This is an AI-generated image. Look for inconsistencies in texture and melting patterns.'
                }
            ]
        },
        {
            id: 5,
            title: 'Level 5: Bird',
            layout: 'grid-2',
            images: [
                {
                    id: 1,
                    src: '/images/bird.jpg',
                    isAI: false,
                    explanation: 'This is a real photograph of a bird. Notice the natural feather details and lighting.'
                },
                {
                    id: 2,
                    src: '/images/bird_ai.png',
                    isAI: true,
                    explanation: 'This is an AI-generated image. Look for inconsistencies in feather patterns and lighting.'
                }
            ]
        },
        {
            id: 6,
            title: 'Level 6: Classroom',
            layout: 'grid-2',
            images: [
                {
                    id: 1,
                    src: '/images/classroom.jpg',
                    isAI: false,
                    explanation: 'This is a real photograph of a classroom. Notice the natural lighting and perspective.'
                },
                {
                    id: 2,
                    src: '/images/classroom_ai.png',
                    isAI: true,
                    explanation: 'This is an AI-generated image. Look for inconsistencies in perspective and lighting.'
                }
            ]
        },
        {
            id: 7,
            title: 'Level 7: Donut',
            layout: 'grid-2',
            images: [
                {
                    id: 1,
                    src: '/images/donut.jpg',
                    isAI: false,
                    explanation: 'This is a real photograph of a donut. Notice the natural texture and lighting.'
                },
                {
                    id: 2,
                    src: '/images/donut_ai.png',
                    isAI: true,
                    explanation: 'This is an AI-generated image. Look for inconsistencies in texture and lighting.'
                }
            ]
        },
        {
            id: 8,
            title: 'Level 8: Cat with Butterfly',
            layout: 'grid-2',
            images: [
                {
                    id: 1,
                    src: '/images/cat_butterfly.jpg',
                    isAI: false,
                    explanation: 'This is a real photograph of a cat with a butterfly. Notice the natural interaction and lighting.'
                },
                {
                    id: 2,
                    src: '/images/cat_butterfly_ai .png',
                    isAI: true,
                    explanation: 'This is an AI-generated image. Look for inconsistencies in the interaction and lighting.'
                }
            ]
        },
        {
            id: 9,
            title: 'Level 9: Women',
            layout: 'grid-2',
            images: [
                {
                    id: 1,
                    src: '/images/women.jpg',
                    isAI: false,
                    explanation: 'This is a real photograph of women. Notice the natural expressions and lighting.'
                },
                {
                    id: 2,
                    src: '/images/women_ai.png',
                    isAI: true,
                    explanation: 'This is an AI-generated image. Look for inconsistencies in facial features and lighting.'
                }
            ]
        },
        {
            id: 10,
            title: 'Level 10: Lego',
            layout: 'grid-2',
            images: [
                {
                    id: 1,
                    src: '/images/lego.jpg',
                    isAI: false,
                    explanation: 'This is a real photograph of Lego. Notice the natural texture and lighting.'
                },
                {
                    id: 2,
                    src: '/images/lego_ai .png',
                    isAI: true,
                    explanation: 'This is an AI-generated image. Look for inconsistencies in texture and lighting.'
                }
            ]
        },
        {
            id: 11,
            title: 'Level 11: Heart',
            layout: 'grid-2',
            images: [
                {
                    id: 1,
                    src: '/images/heart.jpg',
                    isAI: false,
                    explanation: 'This is a real photograph of a heart. Notice the natural texture and lighting.'
                },
                {
                    id: 2,
                    src: '/images/heart_ai.png',
                    isAI: true,
                    explanation: 'This is an AI-generated image. Look for inconsistencies in texture and lighting.'
                }
            ]
        },
        {
            id: 12,
            title: 'Level 12: Orcas',
            layout: 'grid-2',
            images: [
                {
                    id: 1,
                    src: '/images/orcas.jpg',
                    isAI: false,
                    explanation: 'This is a real photograph of orcas. Notice the natural water movement and lighting.'
                },
                {
                    id: 2,
                    src: '/images/orcas_ai_.png',
                    isAI: true,
                    explanation: 'This is an AI-generated image. Look for inconsistencies in water patterns and lighting.'
                }
            ]
        },
        {
            id: 13,
            title: 'Level 13: Mountain',
            layout: 'grid-2',
            images: [
                {
                    id: 1,
                    src: '/images/mountain_real.jpg',
                    isAI: false,
                    explanation: 'This is a real photograph of a mountain. Notice the natural landscape and lighting.'
                },
                {
                    id: 2,
                    src: '/images/mountain_AI.jpg',
                    isAI: true,
                    explanation: 'This is an AI-generated image. Look for inconsistencies in landscape features and lighting.'
                }
            ]
        },
        {
            id: 14,
            title: 'Level 14: Autumn',
            layout: 'grid-2',
            images: [
                {
                    id: 1,
                    src: '/images/autumn_real.jpg',
                    isAI: false,
                    explanation: 'This is a real photograph of autumn scenery. Notice the natural colors and lighting.'
                },
                {
                    id: 2,
                    src: '/images/autumn_AI.jpg',
                    isAI: true,
                    explanation: 'This is an AI-generated image. Look for inconsistencies in colors and lighting.'
                }
            ]
        },
        {
            id: 15,
            title: 'Level 15: Sunglasses',
            layout: 'grid-2',
            images: [
                {
                    id: 1,
                    src: '/images/Sunglasses.heic',
                    isAI: false,
                    explanation: 'This is a real photograph of sunglasses. Notice the natural reflections and lighting.'
                },
                {
                    id: 2,
                    src: '/images/sunglasses_ai.png',
                    isAI: true,
                    explanation: 'This is an AI-generated image. Look for inconsistencies in reflections and lighting.'
                }
            ]
        },
        {
            id: 16,
            title: 'Level 16: Hockey',
            layout: 'grid-2',
            images: [
                {
                    id: 1,
                    src: '/images/hockey_two.heic',
                    isAI: false,
                    explanation: 'This is a real photograph of a hockey scene. Notice the natural movement and lighting.'
                },
                {
                    id: 2,
                    src: '/images/hockey_two_ai.png',
                    isAI: true,
                    explanation: 'This is an AI-generated image. Look for inconsistencies in movement and lighting.'
                }
            ]
        },
        {
            id: 17,
            title: 'Level 17: Rome',
            layout: 'grid-2',
            images: [
                {
                    id: 1,
                    src: '/images/rome.heic',
                    isAI: false,
                    explanation: 'This is a real photograph of Rome. Notice the natural architecture and lighting.'
                },
                {
                    id: 2,
                    src: '/images/rome_ai.png',
                    isAI: true,
                    explanation: 'This is an AI-generated image. Look for inconsistencies in architecture and lighting.'
                }
            ]
        },
        {
            id: 18,
            title: 'Level 18: Trevi Fountain',
            layout: 'grid-2',
            images: [
                {
                    id: 1,
                    src: '/images/trevi.jpg',
                    isAI: false,
                    explanation: 'This is a real photograph of the Trevi Fountain. Notice the natural water movement and lighting.'
                },
                {
                    id: 2,
                    src: '/images/trevi_ai.png',
                    isAI: true,
                    explanation: 'This is an AI-generated image. Look for inconsistencies in water patterns and lighting.'
                }
            ]
        },
        {
            id: 19,
            title: 'Level 19: Dog',
            layout: 'grid-2',
            images: [
                {
                    id: 1,
                    src: '/images/Real_Dog.jpg',
                    isAI: false,
                    explanation: 'This is a real photograph of a dog. Notice the natural fur texture and lighting.'
                },
                {
                    id: 2,
                    src: '/images/Real_Dog_ai.png',
                    isAI: true,
                    explanation: 'This is an AI-generated image. Look for inconsistencies in fur patterns and lighting.'
                }
            ]
        },
        {
            id: 20,
            title: 'Level 20: Another Dog',
            layout: 'grid-2',
            images: [
                {
                    id: 1,
                    src: '/images/dog two.jpg',
                    isAI: false,
                    explanation: 'This is a real photograph of a dog. Notice the natural fur texture and lighting.'
                },
                {
                    id: 2,
                    src: '/images/dog two_ai.png',
                    isAI: true,
                    explanation: 'This is an AI-generated image. Look for inconsistencies in fur patterns and lighting.'
                }
            ]
        }
    ]
}; 

// Helper function to create a new level with any number of images
export const createLevel = (id: number, title: string, images: ImageData[]): Level => {
    const layout = `grid-${images.length}` as Level['layout'];
    return {
        id,
        title,
        images: shuffleArray(images),
        layout
    };
}; 