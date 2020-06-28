//actions to adjust score 1
export const score1Add = () => {
    return {
        type: "ADD_SCORE_1",
    }
};

export const score1Minus = () => {
    return {
        type: "MINUS_SCORE_1",
    }
};

//actions to adjust score 2
export const score2Add = () => {
    return {
        type: "ADD_SCORE_2",
    }
};

export const score2Minus = () => {
    return {
        type: "MINUS_SCORE_2",
    }
};

export const addPlayer = (data) => {
    return {
        type: "ADD_PLAYER",
        data: data,
    }
};

//action to delete single player
export const deletePlayer = (index) => {
    return {
        type: "DELETE_PLAYER",
        index: index,
    }
};

//action to generate two balanced teams of up to 5 people in each team
export const generateTeams = () => {
    return {
        type: "GENERATE_TEAMS",
    }
};

export const addTeamNames = (data) => {
    return {
        type: "ADD_TEAM_NAME",
        data: data,
    }

}


//action to reset team names only
export const resetTeamNames = () => {
    return {
        type: "RESET_TEAM_NAMES",
    }
};

//action to score only
export const resetScore = () => {
    return {
        type: "RESET_SCORE",
    }
};

//action to reset full game including teams and players
export const reset = () => {
    return {
        type: "RESET",
    }
};