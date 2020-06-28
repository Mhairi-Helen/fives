import initial from '../initial';

//individual functions imported into the reducer
import { score1Add, score1Minus, score2Add, score2Minus } from './score';
import addPlayer from './addPlayer';
import deletePlayer from './deletePlayer';
import restScore from './resetScore';
import reset from './reset';


const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_SCORE_1": return score1Add(state);
        case "MINUS_SCORE_1": return score1Minus(state);
        case "ADD_SCORE_2": return score2Add(state);
        case "MINUS_SCORE_2": return score2Minus(state);
        case "ADD_PLAYER": return addPlayer(state, action);
        case "DELETE_PLAYER": return deletePlayer(state, action);
        case "RESET_SCORE": return restScore(state, action);
        case "RESET": return reset(state, action);
        default: return state;
    }
};

export default reducer;