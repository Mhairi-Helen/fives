import { connect } from "react-redux";
import TeamList from "./TeamList";

const mapStateToProps = (state) => {

    return {
        teamName: "Team 2",
        team: state.team2,
        teamsGenerated: state.teamsGenerated,
    }
};

export default connect(mapStateToProps)(TeamList);