import React, { useState, useEffect } from "react";
import { fetchQuestion } from "../actions/QuestionAction";
import { useSelector, useDispatch } from "react-redux";
import Score from "./Score";

function QuestionCard(props) {
  const [quest, setQuest] = useState(0);

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [time, setTimer] = useState(0);

  const dispatch = useDispatch();
  const question = useSelector((state) => state.question);

  useEffect(() => {
    dispatch(fetchQuestion(props.dif, props.cat));
  }, []);

  const [timeLeft, setTimeLeft] = useState(15);

useEffect(() => {
    if(timeLeft===0){
      setQuest(2)
       setTimeLeft(null)
    }
    if (!timeLeft) return;
    const interval = setInterval(() => {

      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);


console.log(timeLeft)
useEffect(() => {
	setTimeLeft(15);
}, [current])

  function handleClick(e) {
    if (
      e.target.innerHTML === question.queslist.results[current].correct_answer
    ) {
      setCurrent(current + 1);
      setScore(score + 1);
      if (current === 9) {
        setQuest(1);
      }
      if (quest === 1) {
      }
    } else {
      setQuest(2);
    }
  }

  return (
    <div>
      <div>
        {quest === 0 ? (
          <div>
            {!question.queslist ? (
              <div>
                <div class="spinner-grow text-danger" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            ) : (
              <div>
                <div className="question-section">
                  <div className="question-count">
                    <h1>TRIVIA GAME</h1>
                   <div className="time">Time:{timeLeft}</div> 
                  </div>
                  <h1>Score:{score}</h1>
                  <div
                    className="question-text"
                    dangerouslySetInnerHTML={{
                      __html: question.queslist.results[current].question,
                    }}
                  ></div>
                </div>

                <div className="answer-section">
                  <button
                    className="select"
                    onClick={handleClick}
                    dangerouslySetInnerHTML={{
                      __html: question.queslist.results[current].correct_answer,
                    }}
                  ></button>{" "}
                  <br />
                  <button
                    className="select"
                    onClick={handleClick}
                    dangerouslySetInnerHTML={{
                      __html:
                        question.queslist.results[current].incorrect_answers[0],
                    }}
                  ></button>{" "}
                  <br />
                  <button
                    className="select"
                    onClick={handleClick}
                    dangerouslySetInnerHTML={{
                      __html:
                        question.queslist.results[current].incorrect_answers[1],
                    }}
                  ></button>{" "}
                  <br />
                  <button
                    className="select"
                    onClick={handleClick}
                    dangerouslySetInnerHTML={{
                      __html:
                        question.queslist.results[current].incorrect_answers[2],
                    }}
                  ></button>{" "}
                  <br />
                </div>
              </div>
            )}
          </div>
        ) : quest === 1 ? (
          <div className="score">
            Kazandınız.
            <Score p={score} />
            <p>
              <strong>Your Time:{time} </strong>
            </p>
          </div>
        ) : (
          quest === 2 && (
            <div className="score">
              Kaybettiniz.
              <Score p={score} />
            </div>
          )
        )}
      </div>
    </div>
  );
}
export default QuestionCard;
