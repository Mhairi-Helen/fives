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