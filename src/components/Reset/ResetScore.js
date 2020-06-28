import { connect } from "react-redux";
import Reset from "./Reset";
import { resetScore } from "../../data/action";

const mapDispatchToProps = (dispatch) => {

    return {
        handleClick: () => dispatch(resetScore())
    }
};

export default connect(null, mapDispatchToProps)(Reset);