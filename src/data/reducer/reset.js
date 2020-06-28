//Reset player list, teams and scores
const reset = (state, action) => {
    return {
        players: [],
        team1: [],
        team2: [],
        team1Name: 'Team 1',
        team2Name: 'Team 2',
        team1Score: 0,
        team2Score: 0,
    }
};

export default reset;