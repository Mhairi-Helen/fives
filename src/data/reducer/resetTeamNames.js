//Reset the Team Names only for improved user flexibility
const resetTeamNames = (state, action) => {

    return {
        ...state,
        team1Name: 'Team 1',
        team2Name: 'Team 2',
    }
};

export default resetTeamNames;