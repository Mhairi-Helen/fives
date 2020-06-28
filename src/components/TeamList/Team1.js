import { connect } from "react-redux";
import TeamList from "./TeamList";

const mapStateToProps = (state) => {

    return {
        teamName: "Team 1",
        team: state.team1,
        teamsGenerated: state.teamsGenerated,
    }
};

export default connect(mapStateToProps)(TeamList);