import React, { useState, useEffect } from 'react';
import { fetchQuestion } from '../actions/QuestionAction';
import { useSelector, useDispatch } from 'react-redux';
import Score from './Score';
import { formatTime } from '../utils/formatTime';
let interval;
function QuestionCard(props) {
	const [quest, setQuest] = useState(0);
	const [page, setpage] = useState(false)
	const [current, setCurrent] = useState(0);
	const [score, setScore] = useState(0);
	const [time, setTimer] = useState(0);

	const dispatch = useDispatch();
	const question = useSelector((state) => state.question);

	useEffect(() => {
		dispatch(fetchQuestion(props.dif, props.cat));
		interval = setInterval(() => {
			setTimer(prevTime => prevTime + 1);
		}, 1000);
	}, []);

	console.log(time)
	function handleClick(e) {
		if (e.target.innerHTML === question.queslist.results[current].correct_answer) {
			setCurrent(current + 1)
			setScore(score + 1)
			if (current === 9) {
				clearInterval(interval)
				setQuest(1)
				setpage(true)
			}
			if (quest === 1) {
				clearInterval(interval)
			}
		} else {
			setQuest(2)
			clearInterval(interval)
		}


	}

	return (

		<div>

			<div>

				{
					quest === 0 ? <div>{
						!question.queslist ? <div><div class="spinner-grow text-danger" role="status">
						<span class="sr-only">Loading...</span>
					  </div></div> : <div>


							<div className='question-section'>
								<div className='question-count'>
									<h1>TRIVIA GAME</h1>
								</div>
								<h1>Score:{score}</h1>
								<div className='question-text'

									dangerouslySetInnerHTML={{ __html: question.queslist.results[current].question }}
								></div>
							</div>

							<div className='answer-section'>
								<button className="select" onClick={handleClick} dangerouslySetInnerHTML={{ __html: question.queslist.results[current].correct_answer }}></button> <br />
								<button className="select" onClick={handleClick} dangerouslySetInnerHTML={{ __html: question.queslist.results[current].incorrect_answers[0] }}></button> <br />
								<button className="select" onClick={handleClick} dangerouslySetInnerHTML={{ __html: question.queslist.results[current].incorrect_answers[1] }}></button> <br />
								<button className="select" onClick={handleClick} dangerouslySetInnerHTML={{ __html: question.queslist.results[current].incorrect_answers[2] }}></button> <br />


							</div>
						</div>
					}
					</div> :
						quest === 1 ? <div className="score">
							Kazandınız.
							<Score p={score} />

							<p><strong>Your Time:{time} </strong></p>
						</div> :
							quest === 2 && <div className="score">
								Kaybettiniz.
								<Score p={score} />
								<p><strong>Your Time:{time}</strong></p>
							</div>

				}



			</div>


		</div>
	)
};
export default QuestionCard;