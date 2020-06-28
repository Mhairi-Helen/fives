//generate teams based on skill level


//sort players in order of experience entered
const orderByLevel = (array) => {

    return array.sort((a, b) => a.experience - b.experience);
};

//adds alternating players into teams once sorted
const splitPlayers = (array) => {

    if (array.length <= 3) {
        return "Please enter more than 3 players"
    };

    let team1 = [];
    let team2 = [];
    let teams = [team1, team2];

    array.forEach((player, index) => (index % 2 === 0) ? team1.push(player) : team2.push(player));

    return teams;
};

const balanceTeams = (players) => {
    return splitPlayers(orderByLevel(players));
};

export const generateTeams = (state) => {

    const teams = balanceTeams(state.players);

    const team1 = teams[0];
    const team2 = teams[1];

    return {
        ...state,
        team1: team1,
        team2: team2,
        teamsGenerated: true,
        players: [],
    }
};