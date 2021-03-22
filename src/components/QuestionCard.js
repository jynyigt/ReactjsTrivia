import React, { useState, useEffect } from 'react';
import { fetchQuestion } from '../actions/QuestionAction';
import { useSelector, useDispatch } from 'react-redux';
import Score from './Score';
import { BrowserRouter, Route, Link } from "react-router-dom";

function QuestionCard(props) {
	const [quest, setQuest] = useState(0);
	const [page, setpage] = useState(false)
	const [current, setCurrent] = useState(0);
	const [score, setScore] = useState(0);
	const dispatch = useDispatch();
	const question = useSelector((state) => state.question);

	useEffect(() => {
		dispatch(fetchQuestion(props.dif, props.cat));
	}, []);

	function handleClick(e) {
		if (e.target.innerHTML === question.queslist.results[current].correct_answer) {
			setCurrent(current + 1)
			setScore(score + 1)
			if (current === 9) {
				setQuest(1)
				setpage(true)
			}
		} else {
			setQuest(2)
		}


	}

	return (

		<div>

			<div>

				{
					quest === 0 ? <div>{
						!question.queslist ? <div>yok</div> : <div>


							<div className='question-section'>
								<div className='question-count'>
									<h1>TRIVIA GAME</h1>
								</div>
								<h1>Score:{score}</h1>
								<div className='question-text'>{question.queslist.results[current].question}</div>
							</div>

							<div className='answer-section'>
								<button onClick={handleClick}>{question.queslist.results[current].correct_answer}</button> <br />
								<button onClick={handleClick}>{question.queslist.results[current].incorrect_answers[0]}</button> <br />
								<button onClick={handleClick}>{question.queslist.results[current].incorrect_answers[1]}</button> <br />
								<button onClick={handleClick}>{question.queslist.results[current].incorrect_answers[2]}</button> <br />


							</div>
						</div>
					}
						<button onClick={() => setCurrent(current + 1)} >Next</button> </div> :
						quest === 1 ? <div>Kazandınız.<Score p={score} /></div> :
							quest === 2 && <div> Kaybettiniz.<Score p={score} /> </div>

				}



			</div>


		</div>
	)
};
export default QuestionCard;