import QuestionCard from "./QuestionCard";
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { start } from "../actions/QuestionAction";
import { fetchQuestion } from '../actions/QuestionAction';
import { Link } from "react-router-dom";
import '../App.css';
function Start(props) {
  const dispatch = useDispatch();
  const [page, setpage] = useState(false)
  const [category, setCategory] = useState("")
  const [choise, setChoise] = useState("")
  const difficulty = useSelector((state) => state.difficulty);
  useEffect(() => {
    dispatch(start());
  }, []);
  function changeDifficulty(e) {

    setChoise(e.target.value)
  }
  function changeCategory(e) {

    setCategory(e.target.value)
  }
  function handleClick() { 

    setpage(true)
  }

  return (
    <div className="App">
 <div className="row">
 <div className="">
 {
        page === false &&

        <div>
          {!difficulty.difficult ? (
            <div >
              <div class="spinner-grow text-danger" role="status">
  <span class="sr-only">Loading...</span>
</div>
            </div>
          ) : (
            <div >
              <div >
                <div>
                  <select className="select" onChange={changeDifficulty}>
                    <option> Any Difficulty </option>
                    <option> easy </option>
                    <option> medium </option>
                    <option> hard </option>
                  </select>
                  <div>
                    <select className="select" onChange={changeCategory}>
                      <option>Any Category</option>
                      {difficulty.difficult.trivia_categories.map(
                        (c) => (
                          <option key={c.id} value={c.id}>{c.name}</option>
                        )
                      )}
                    </select>
                  </div>
                  <button className="select" onClick={handleClick}>
                    Start
              </button>
                </div>
              </div>
            </div>
          )}
        </div>
      }
      {
        page === true &&
        <QuestionCard dif={choise} cat={category} />
      }
 </div>
 </div>
      
    </div>
  )
}
export default Start;