import { connect } from "react-redux";
import ResetTeamNames from "./ResetTeamNames";
import { reset } from "../../data/action";

const mapDispatchToProps = (dispatch) => {

    return {
        handleClick: () => dispatch(resetTeamNames())
    }
};

export default connect(null, mapDispatchToProps)(ResetTeamNames);