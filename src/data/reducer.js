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



//save the settings from the form
const addPlayer = (state, { data }) => {
    return {
        ...state,
        players: [
            ...state.players,
            {
                playerName: data.playerName,
                experience: data.experience,
            }
        ]
    }
};

//Delete players by id by returning a new array minus the player with index specified inthe action
const deletePlayer = (state, action) => {



    let newPlayers = state.players.filter((player, index) => {
        return index !== action.index;

    })

    return {
        ...state,
        players: newPlayers
    }
};


//Reset the scores and teams but NOT the player list for a new game
const reset = (state, action) => {
    return {
        players: [],
        players1: [],
        players2: [],
        team1Name: 'Team 1',
        team2Name: 'Team 2',
        team1Score: 0,
        team2Score: 0,
    }
}



const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_SCORE_1": return score1Add(state);
        case "MINUS_SCORE_1": return score1Minus(state);
        case "ADD_SCORE_2": return score2Add(state);
        case "MINUS_SCORE_2": return score2Minus(state);
        case "ADD_PLAYER": return addPlayer(state, action);
        case "DELETE_PLAYER": return deletePlayer(state, action);
        case "RESET": return reset(state, action);
        default: return state;
    }
};

export default reducer;