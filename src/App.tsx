import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { getShuffledLevels } from './gameConfig';
import { GameState, ImageData } from './types';
import { Collage } from './components/Collage';
import { Results } from './components/Results';
import {
    Container,
    Header,
    Title,
    Subtitle,
    GameContainer,
    Controls,
    Button,
    ProgressBar,
    ProgressFill,
    LevelIndicator
} from './styles';

const Instructions = styled(motion.div)`
    background: white;
    padding: 0.75rem;
    border-radius: 8px;
    margin: 0.5rem 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    text-align: center;
    border: 1px solid rgba(74, 144, 226, 0.1);
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.95rem;
    color: #2c3e50;
    
    &::before {
        content: "🎯";
        font-size: 1.1rem;
    }
`;

const HintText = styled.span`
    color: #666;
    font-size: 0.9rem;
    font-style: italic;
`;

const App: React.FC = () => {
    const [gameState, setGameState] = useState<GameState>({
        currentLevel: 0,
        selectedImages: new Set<number>(),
        isGameOver: false
    });

    const currentLevel = getShuffledLevels()[gameState.currentLevel];
    const correctAnswers = new Set<number>(
        currentLevel.images
            .map((image, index) => ({ ...image, index }))
            .filter(img => img.isAI)
            .map(img => img.index)
    );
    const isLastLevel = gameState.currentLevel === getShuffledLevels().length - 1;
    const nextLevel = gameState.currentLevel + 1;

    const handleImageSelect = (index: number) => {
        if (gameState.isGameOver) return;

        const newSelectedImages = new Set(gameState.selectedImages);
        if (newSelectedImages.has(index)) {
            newSelectedImages.delete(index);
        } else {
            newSelectedImages.add(index);
        }

        setGameState(prev => ({
            ...prev,
            selectedImages: newSelectedImages
        }));
    };

    const handleNextLevel = () => {
        if (isLastLevel) {
            setGameState(prev => ({
                ...prev,
                isGameOver: true
            }));
        } else {
            setGameState(prev => ({
                ...prev,
                currentLevel: nextLevel,
                selectedImages: new Set<number>()
            }));
        }
    };

    const handleRestart = () => {
        setGameState({
            currentLevel: 0,
            selectedImages: new Set<number>(),
            isGameOver: false
        });
    };

    const progress = ((gameState.currentLevel + 1) / getShuffledLevels().length) * 100;

    return (
        <Container>
            <Header>
                <Title>AI vs Real Images Challenge</Title>
                <Subtitle>Test your ability to distinguish between AI-generated and real images!</Subtitle>
            </Header>

            <GameContainer>
                <LevelIndicator>
                    Level {gameState.currentLevel + 1} of {getShuffledLevels().length}
                </LevelIndicator>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={gameState.currentLevel}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Collage
                            images={currentLevel.images}
                            selectedImages={gameState.selectedImages}
                            onSelect={handleImageSelect}
                            isChecking={false}
                            correctAnswers={correctAnswers}
                        />
                    </motion.div>
                </AnimatePresence>

                <Controls>
                    {!gameState.isGameOver && (
                        <Instructions
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            Select AI-generated images
                            <HintText>Look for inconsistencies in lighting and details</HintText>
                        </Instructions>
                    )}
                    {!gameState.isGameOver && (
                        <Button
                            variant="primary"
                            onClick={handleNextLevel}
                            disabled={gameState.selectedImages.size === 0}
                        >
                            {gameState.selectedImages.size === 0 ? 'Select Images' : 'Next Level'}
                        </Button>
                    )}
                    {gameState.isGameOver && (
                        <Button
                            variant="success"
                            onClick={handleRestart}
                        >
                            Restart
                        </Button>
                    )}
                </Controls>

                {gameState.isGameOver && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Results results={currentLevel.images.map((image: ImageData, index: number) => ({
                            image,
                            index,
                            isSelected: gameState.selectedImages.has(index),
                            isCorrect: image.isAI === gameState.selectedImages.has(index)
                        }))} />
                    </motion.div>
                )}
            </GameContainer>

            <ProgressBar>
                <span>Progress</span>
                <ProgressFill progress={progress} />
            </ProgressBar>
        </Container>
    );
};

export default App;
