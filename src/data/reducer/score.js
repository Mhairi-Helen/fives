//Score Update

//update team 1 score
const score1Add = (state, action) => {
    return {
        ...state,
        team1Score: state.team1Score + 1
    };
};

const score1Minus = (state, action) => {
    return {
        ...state,
        team1Score: state.team1Score - (state.team1Score > 0 ? 1 : 0)
    };
};

//update team 2 score
const score2Add = (state, action) => {
    return {
        ...state,
        team2Score: state.team2Score + 1
    }
};

const score2Minus = (state, action) => {
    return {
        ...state,
        team2Score: state.team2Score - (state.team2Score > 0 ? 1 : 0)
    };
};