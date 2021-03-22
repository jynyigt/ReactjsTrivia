import { FETCH_DIFFICULTY_SUCCESS } from "../actions/QuestionAction";
export default (state ={}, action) => {
	switch (action.type){
		case FETCH_DIFFICULTY_SUCCESS:
			return {
				difficult: action.payload,
			};
            default:
                return state;
    }
}
		