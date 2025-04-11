import React from 'react';
import { ResultItemProps } from '../types';
import { ResultsPanel, ResultItem } from '../styles';

export const Results: React.FC<{ results: ResultItemProps[] }> = ({ results }) => {
    return (
        <ResultsPanel>
            {results.map((result, index) => (
                <ResultItem key={index} isCorrect={result.isCorrect}>
                    <h4>Image {result.index + 1}</h4>
                    <p>{result.image.isAI ? 'AI Generated' : 'Real Image'}</p>
                    {result.image.isAI && result.image.hint && (
                        <p className="hint">Hint: {result.image.hint}</p>
                    )}
                </ResultItem>
            ))}
        </ResultsPanel>
    );
}; 