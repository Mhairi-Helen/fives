//Reset the scores for a new game
const resetScore = (state, action) => {

    return {
        ...state,
        team1Score: 0,
        team2Score: 0,
    }
};

export default resetScore;