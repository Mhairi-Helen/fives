import { connect } from 'react-redux';
import Player from './Player';
import { addPlayer } from '../../data/action';

const mapStateToProps = state => {

    return {
        players: state.players,
        teamsGenerated: state.teamsGenerated,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleSubmitPlayer: data => dispatch(addPlayer(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);