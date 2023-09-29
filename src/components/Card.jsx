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

      let randomIndex = Math.floor(Math.random() * Object.keys(dictionary).length);
      let randomQuestion = Object.keys(dictionary)[randomIndex];
      let answer = dictionary[randomQuestion];
    
      const [start, started] = useState(false);
      const [questionDisplayed, changeQuestion] = useState(randomQuestion);
      const [answerDisplayed, changeAnswer] = useState(answer);
      const [display, changeDisplay] = useState(questionDisplayed);

      const handleChangeCard = () => {
        let newIndex = Math.floor(
            Math.random() * Object.keys(dictionary).length
        );
        let newQuestion = Object.keys(dictionary)[newIndex];
        let newAnswer = dictionary[newQuestion];
        changeQuestion(newQuestion);
        changeAnswer(newAnswer);
        changeDisplay(newQuestion);
      }

      const handleCardFlip = () => {
        if(display === questionDisplayed) {
            changeDisplay(answerDisplayed)
        } else {
            changeDisplay(questionDisplayed)
        }
      }

      const startGame = () => {
        if(start === false) {
            return(
                <>
                <div className="card">
                    Start!
                </div>
                <button onClick = {() =>  started(true)}>
                    Begin Game!
                </button></>
            );
        } else {
            return(
                <>
                <div className="card" onClick = {handleCardFlip}>
                    {display}
                </div>
                <button onClick = {handleChangeCard}>
                    Next!
                </button></>
            );
        }
      }

      return startGame();
}

export default Card;