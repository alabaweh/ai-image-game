import React from 'react';
import { ResultItemProps } from '../types';
import styled from 'styled-components';

const ResultsPanel = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const ResultItem = styled.div<{ isCorrect: boolean }>`
    padding: 1rem;
    border-radius: 8px;
    background: ${props => props.isCorrect ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)'};
    border-left: 4px solid ${props => props.isCorrect ? '#4CAF50' : '#f44336'};
`;

const ResultTitle = styled.h4`
    margin: 0;
    color: #333;
    font-size: 1.1rem;
`;

const ResultType = styled.p`
    margin: 0.5rem 0;
    color: #666;
    font-weight: bold;
`;

const Explanation = styled.p`
    margin: 0.5rem 0 0 0;
    color: #444;
    font-size: 0.95rem;
    line-height: 1.4;
`;

export const Results: React.FC<{ results: ResultItemProps[] }> = ({ results }) => {
    return (
        <ResultsPanel>
            {results.map((result, index) => (
                <ResultItem key={index} isCorrect={result.isCorrect}>
                    <ResultTitle>Image {result.index + 1}</ResultTitle>
                    <ResultType>{result.image.isAI ? 'AI Generated' : 'Real Image'}</ResultType>
                    <Explanation>{result.image.explanation}</Explanation>
                </ResultItem>
            ))}
        </ResultsPanel>
    );
}; 