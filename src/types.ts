export interface ImageData {
    id: number;
    src: string;
    isAI: boolean;
    explanation: string;
    hint?: string;
}

export interface Level {
    id: number;
    title: string;
    images: ImageData[];
    layout: 'grid-2' | 'grid-3' | 'grid-4' | 'grid-5' | 'grid-6';
}

export interface GameState {
    currentLevel: number;
    selectedImages: Set<number>;
    isGameOver: boolean;
}

export interface CollageProps {
    images: ImageData[];
    selectedImages: Set<number>;
    onSelect: (index: number) => void;
    isChecking: boolean;
    correctAnswers: Set<number>;
}

export interface ResultItemProps {
    image: ImageData;
    index: number;
    isSelected: boolean;
    isCorrect: boolean;
} 