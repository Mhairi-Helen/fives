//Score Update

//update team 1 score
const score1Add = (state, action) => {
    return {
        ...state,
        scoreTeam1: state.scoreTeam1 + 1
    };
};

const score1Minus = (state, action) => {
    return {
        ...state,
        scoreTeam1: state.scoreTeam1 - (state.scoreTeam1 > 0 ? 1 : 0)
    };
};

//update team 2 score
const score2Add = (state, action) => {
    return {
        ...state,
        scoreTeam2: state.scoreTeam2 + 1
    }
};

const score2Minus = (state, action) => {
    return {
        ...state,
        scoreTeam2: state.scoreTeam2 - (state.scoreTeam2 > 0 ? 1 : 0)
    };
};

//Returning the Winner

//Check if there is a winner
const winningScore = state => state.scoreTeam1 >= state.winningScore || state.scoreTeam2 >= state.winningScore;

//Check which team is the winning team
const winningTeam = state => state.scoreTeam1 > state.scoreTeam2 ? state.Team1Name : state.Team2Name;

//return the winning team
const winner = (state, action) => {
    return {
        ...state,
        winner: winningScore(state) ? winningTeam(state) : ""
    }
};


//Reset the scores and team names for a new game
const reset = (state, action) => {
    return {
        ...state,
        scoreTeam1: 0,
        scoreTeam2: 0,
        winner: '',
        team1Name: 'Team 1',
        team2Name: 'Team 2',
        winningScore: 8,
    }
}



const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_SCORE_1": return winner(score1Add(state));
        case "MINUS_SCORE_1": return winner(score1Minus(state));
        case "ADD_SCORE_2": return winner(score2Add(state));
        case "MINUS_SCORE_2": return winner(score2Minus(state));
        case "RESET": return reset(state, action);
        default: return state;
    }
};

export default reducer;