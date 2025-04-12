import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { gameConfig } from './gameConfig';
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
        selectedImages: new Set(),
        isChecking: false,
        showResults: false
    });

    const currentLevel = gameConfig.levels[gameState.currentLevel];
    const correctAnswers = new Set<number>(
        currentLevel.images
            .map((img: ImageData, index: number) => img.isAI ? index : null)
            .filter((index: number | null): index is number => index !== null)
    );

    const handleSelect = (index: number) => {
        if (gameState.isChecking) return;

        setGameState(prev => {
            const newSelected = new Set(prev.selectedImages);
            if (newSelected.has(index)) {
                newSelected.delete(index);
            } else {
                newSelected.add(index);
            }
            return { ...prev, selectedImages: newSelected };
        });
    };

    const handleCheck = () => {
        setGameState(prev => ({
            ...prev,
            isChecking: true,
            showResults: true
        }));
    };

    const handleNext = () => {
        setGameState(prev => ({
            currentLevel: (prev.currentLevel + 1) % gameConfig.levels.length,
            selectedImages: new Set(),
            isChecking: false,
            showResults: false
        }));
    };

    const progress = ((gameState.currentLevel + 1) / gameConfig.levels.length) * 100;

    const isLastLevel = gameState.currentLevel === gameConfig.levels.length - 1;
    const nextLevel = gameConfig.levels[gameState.currentLevel + 1];
    const isFirstLevel = gameState.currentLevel === 0;

    return (
        <Container>
            <Header>
                <Title>AI vs Real Images Challenge</Title>
                <Subtitle>Test your ability to distinguish between AI-generated and real images!</Subtitle>
            </Header>

            <GameContainer>
                <LevelIndicator>
                    Level {gameState.currentLevel + 1} of {gameConfig.levels.length}
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
                            onSelect={handleSelect}
                            isChecking={gameState.isChecking}
                            correctAnswers={correctAnswers}
                        />
                    </motion.div>
                </AnimatePresence>

                <Controls>
                    {!gameState.showResults && (
                        <Instructions
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            Select AI-generated images
                            <HintText>Look for inconsistencies in lighting and details</HintText>
                        </Instructions>
                    )}
                    <Button
                        variant="primary"
                        onClick={handleCheck}
                        disabled={gameState.isChecking || gameState.selectedImages.size === 0}
                    >
                        {gameState.selectedImages.size === 0 ? 'Select Images to Check' : 'Check Answers'}
                    </Button>
                    {gameState.showResults && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Button variant="success" onClick={handleNext}>
                                Next Level
                            </Button>
                        </motion.div>
                    )}
                </Controls>

                {gameState.showResults && (
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
