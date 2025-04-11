export interface ImageData {
    src: string;
    isAI: boolean;
    explanation: string;
    hint?: string;
}

export interface Level {
    title: string;
    images: ImageData[];
    layout: 'grid-2' | 'grid-3' | 'grid-4' | 'grid-5' | 'grid-6';
}

export interface GameState {
    currentLevel: number;
    selectedImages: Set<number>;
    isChecking: boolean;
    showResults: boolean;
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