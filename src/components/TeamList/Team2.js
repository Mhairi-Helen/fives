import { connect } from "react-redux";
import TeamList from "./TeamList";

const mapStateToProps = (state) => {

    return {
        teamName: state.team1Name,
        team: state.team2,
        teamsGenerated: state.teamsGenerated,
        colours1: false,
    }
};

export default connect(mapStateToProps)(TeamList);