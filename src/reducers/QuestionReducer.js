import { FETCH_DIFFICULTY_SUCCESS, FETCH_QUESTİON_SUCCESS } from "../actions/QuestionAction";


export default (state ={}, action) => {
	switch (action.type){
		case FETCH_QUESTİON_SUCCESS:
			return {
				queslist: action.payload,
			};
            default:
                return state;
    }
}
	
