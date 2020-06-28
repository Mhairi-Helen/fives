import { connect } from "react-redux";
import ResetScore from "./ResetScore";
import { resetScore } from "../../data/action";

const mapDispatchToProps = (dispatch) => {

    return {
        handleClick: () => dispatch(resetScore())
    }
};

export default connect(null, mapDispatchToProps)(ResetScore);