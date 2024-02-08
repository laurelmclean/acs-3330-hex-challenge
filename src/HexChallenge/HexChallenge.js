import './HexChallenge.css';
import { useState, useEffect } from 'react';

function HexChallenge() {
    const randomColor = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    };

    const determineAnswer = () => {
        const colors = [color1, color2, color3];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    };

    const [color1, setColor1] = useState(randomColor());
    const [color2, setColor2] = useState(randomColor());
    const [color3, setColor3] = useState(randomColor());
    const [answer, setAnswer] = useState(determineAnswer());
    const [userAnswer, setUserAnswer] = useState('');

    useEffect(() => {
        setAnswer(determineAnswer());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [color1, color2, color3]);

    const handleResetButtonClick = () => {
        setUserAnswer('');
        setColor1(randomColor());
        setColor2(randomColor());
        setColor3(randomColor());
    };

    return (
        <div className="App">
            <h1>Color Challenge</h1>
            <div className="hex-container">
                <div style={{ backgroundColor: color1 }} onClick={() => setUserAnswer(color1)} className="hex-box" />
                <div style={{ backgroundColor: color2 }} onClick={() => setUserAnswer(color2)} className="hex-box" />
                <div style={{ backgroundColor: color3 }} onClick={() => setUserAnswer(color3)} className="hex-box" />
            </div>
            <h2>Click the swatch that matches: {answer}</h2>
            {userAnswer === '' ? '' : userAnswer === answer ? <h1>Correct</h1> : <h1>Incorrect</h1>}
            <button onClick={handleResetButtonClick}>Play Again</button>
        </div>
    );
}

export default HexChallenge;
