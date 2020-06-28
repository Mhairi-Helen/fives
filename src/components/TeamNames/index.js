import { connect } from 'react-redux';
import TeamNames from './TeamNames';
import { addTeamNames } from '../../data/action';


const mapStateToProps = state => {

    return {
        team1Name: state.team1Name,
        team2Name: state.team2Name,
        teamsGenerated: state.teamsGenerated,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleSubmitTeamNames: data => dispatch(addTeamNames(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamNames);