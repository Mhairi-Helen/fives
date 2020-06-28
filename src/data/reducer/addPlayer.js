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

export default addPlayer;