import { connect } from "react-redux";
import TeamList from "./TeamList";

const mapStateToProps = (state) => {

    return {
        teamName: state.team2Name,
        team: state.team2,
        teamsGenerated: state.teamsGenerated,
    }
};

export default connect(mapStateToProps)(TeamList);