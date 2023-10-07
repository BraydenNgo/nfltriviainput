import React from "react";
import { useState } from "react";
import "./Card.css"

const Card = () => {
        let dictionary = {
        'What does the NFL stand for?': 'National Football League',
        'Who is the current commissioner of the NFL?': 'Roger Goodell',
        'Who has kicked the longest field goal successfully of all time?': 'Justin Tucker',
        'Which player has won the most NFL MVP awards?': 'Peyton Manning',
        'Who has the most return touchdowns in the NFL all time?': 'Devin Hester',
        'Which NFL team had the most wins in the 1970s?': 'Dallas Cowboys',
        'What is the only team to have an undefeated season in the Super Bowl era?': '1972 Miami Dolphins',
        'Which NFL team holds the record for longest losing streak of all time?': 'Tampa Bay Buccaneers',
        'What is the oldest stadium in the NFL?': 'Lambeau Field',
        'Who has the longest interception return in the NFL?': 'Ed Reed',
      };

    const totalQuestions = Object.keys(dictionary).length;

    const [randomIndex, setRandomIndex] = useState(Math.floor(Math.random() * totalQuestions));
    const [start, setStart] = useState(false);
    const [displayQuestion, setDisplayQuestion] = useState(true);
    const [userGuess, setUserGuess] = useState('');
    const [feedback, setFeedback] = useState(null);

    const currentQuestion = Object.keys(dictionary)[randomIndex];
    const currentAnswer = dictionary[currentQuestion];

    const nextCard = () => {
        setRandomIndex((randomIndex + 1) % totalQuestions);
        setDisplayQuestion(true);
        setFeedback(null);
        setUserGuess('');
    }

    const prevCard = () => {
        setRandomIndex((randomIndex - 1 + totalQuestions) % totalQuestions);
        setDisplayQuestion(true);
        setFeedback(null);
        setUserGuess('');
    }

    const handleCardFlip = () => {
        setDisplayQuestion(!displayQuestion);
    }

    const handleGuessSubmit = () => {
        if (userGuess.toLowerCase() === currentAnswer.toLowerCase()) {
            setFeedback("Correct!");
        } else {
            setFeedback("Incorrect. Try again.");
        }
    }

    if (!start) {
        return (
            <>
                <div className="card">
                    BEGIN GAME
                </div>
                <label htmlFor="guess">Guess an answer:</label>
                <input
                    id="guess"
                    value={userGuess}
                    onChange={e => setUserGuess(e.target.value)}
                />
                <button className="controls" onClick={() => setStart(true)}>Next</button>
                <button onClick={() => {}}>Submit</button>
            </>
        );
    }

    return (
        <>
            <div className="card" onClick={handleCardFlip}>
                {displayQuestion ? currentQuestion : currentAnswer}
            </div>
            
            <label htmlFor="guess">Your Guess:</label>
            <input
                id="guess"
                value={userGuess}
                onChange={e => setUserGuess(e.target.value)}
                placeholder="Enter your guess..."
            />
            <button onClick={handleGuessSubmit}>Submit Guess</button>
            {feedback && <p>{feedback}</p>}
            
            <div>
                <button className="controls" onClick={prevCard}>Previous</button>
                <button className="controls" onClick={nextCard}>Next</button>
            </div>
        </>
    );
}

export default Card;
