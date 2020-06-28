import { connect } from 'react-redux';
import Players from './Players';
import { deletePlayer, generateTeams } from "../../data/action";

const mapStateToProps = state => {

    return {
        players: state.players,
        teamsGenerated: state.teamsGenerated,
    };
};
const mapDispatchToProps = (dispatch) => {

    return {
        handleDelete: (index) => dispatch(deletePlayer(index)),
        handleGenerate: () => dispatch(generateTeams())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Players);