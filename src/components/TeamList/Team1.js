import { connect } from "react-redux";
import TeamList from "./TeamList";

const mapStateToProps = (state) => {

    return {
        teamName: state.team1Name,
        team: state.team1,
        teamsGenerated: state.teamsGenerated,
    }
};

export default connect(mapStateToProps)(TeamList);