import { API_BASE } from '../config/env';
import axios from 'axios';

export const FETCH_QUESTİON_SUCCESS = "FETCH_QUESTİON_SUCCESS";
export const FETCH_DIFFICULTY_SUCCESS = "FETCH_DIFFICULTY_SUCCESS";



export const fetchQuestion=(dif,cat)=>async(dispatch,getState)=>{
	const response =await axios.get(`https://opentdb.com/api.php?amount=10&category=${cat}&difficulty=${dif}&type=multiple`)
	dispatch({
		type: FETCH_QUESTİON_SUCCESS,

			payload: response.data
 
	});

 };
 export const start=()=>async(dispatch,getState)=>{
	const response =await axios.get(`https://opentdb.com/api_category.php`)
	dispatch({
		type: FETCH_DIFFICULTY_SUCCESS,

			payload: response.data
 
	});
};
