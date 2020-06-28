//save the settings from the team name form
const addTeamNames = (state, { data }) => {
    return {
        ...state,
        team1Name: data.team1Name,
        team2Name: data.team2Name,
    }
};

export default addTeamNames;