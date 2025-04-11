import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    min-height: 100vh;
    background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
`;

export const Header = styled.header`
    text-align: center;
    margin-bottom: 3rem;
    padding: 2rem;
    background: white;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
    color: #2c3e50;
    margin-bottom: 1rem;
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #4a90e2 0%, #2c3e50 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const Subtitle = styled.p`
    color: #666;
    font-size: 1.2rem;
    margin-bottom: 1rem;
`;

export const GameContainer = styled.div`
    background: white;
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
`;

export const CollageContainer = styled.div<{ layout: string }>`
    display: grid;
    gap: 1.5rem;
    margin-bottom: 2rem;
    min-height: 400px;
    padding: 1rem;

    ${props => {
        switch (props.layout) {
            case 'grid-2':
                return 'grid-template-columns: repeat(2, 1fr);';
            case 'grid-3':
                return 'grid-template-columns: repeat(3, 1fr);';
            case 'grid-4':
                return 'grid-template-columns: repeat(2, 1fr); grid-template-rows: repeat(2, 1fr);';
            case 'grid-5':
                return 'grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(2, 1fr);';
            case 'grid-6':
                return 'grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(2, 1fr);';
            default:
                return 'grid-template-columns: 1fr;';
        }
    }}
`;

export const CollageItem = styled.div<{ 
    isSelected: boolean; 
    isChecking: boolean;
    isCorrect: boolean;
    isIncorrect: boolean;
}>`
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 3px solid transparent;
    margin: 5px;
    aspect-ratio: 1;

    ${props => props.isSelected && `
        border-color: #4a90e2;
        box-shadow: 0 0 20px rgba(74, 144, 226, 0.4);
        transform: scale(1.02);
    `}

    ${props => props.isChecking && props.isCorrect && `
        border-color: #2ecc71;
        box-shadow: 0 0 20px rgba(46, 204, 113, 0.4);
    `}

    ${props => props.isChecking && props.isIncorrect && `
        border-color: #e74c3c;
        box-shadow: 0 0 20px rgba(231, 76, 60, 0.4);
    `}

    &:hover {
        transform: scale(1.03);
        box-shadow: 0 0 15px rgba(74, 144, 226, 0.3);
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
`;

export const NumberBadge = styled.div`
    position: absolute;
    bottom: 15px;
    right: 15px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 8px 15px;
    border-radius: 20px;
    font-size: 1rem;
    font-weight: 600;
    backdrop-filter: blur(5px);
`;

export const Controls = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    margin-top: 2rem;
`;

export const Button = styled.button<{ variant: 'primary' | 'success' }>`
    padding: 1rem 2rem;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    background: ${props => props.variant === 'primary' ? '#4a90e2' : '#2ecc71'};
    color: white;
    min-width: 200px;
    text-transform: uppercase;
    letter-spacing: 1px;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
    }
`;

export const ResultsPanel = styled.div`
    margin-top: 2rem;
    padding: 2rem;
    border-radius: 15px;
    background: #f8f9fa;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

export const ResultItem = styled.div<{ isCorrect: boolean }>`
    margin-bottom: 1.5rem;
    padding: 1.5rem;
    border-radius: 12px;
    background: white;
    border: 2px solid ${props => props.isCorrect ? '#2ecc71' : '#e74c3c'};
    background-color: ${props => props.isCorrect ? 'rgba(46, 204, 113, 0.1)' : 'rgba(231, 76, 60, 0.1)'};
    transition: all 0.3s ease;

    h4 {
        color: #2c3e50;
        margin-bottom: 0.5rem;
        font-size: 1.2rem;
    }

    p {
        color: #666;
        margin-bottom: 0.5rem;
    }

    .hint {
        color: #2c3e50;
        font-style: italic;
        padding: 0.5rem;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 8px;
    }
`;

export const ProgressBar = styled.div`
    margin-top: 2rem;
    text-align: center;
    padding: 1rem;
    background: white;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

    span {
        display: block;
        margin-bottom: 1rem;
        font-size: 1.2rem;
        color: #2c3e50;
        font-weight: 600;
    }
`;

export const ProgressFill = styled.div<{ progress: number }>`
    height: 10px;
    background: linear-gradient(90deg, #4a90e2 0%, #2ecc71 100%);
    border-radius: 5px;
    transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    width: ${props => props.progress}%;
`;

export const LevelIndicator = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: rgba(255, 255, 255, 0.9);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: 600;
    color: #2c3e50;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`; 