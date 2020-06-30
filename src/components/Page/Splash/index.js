import { connect } from "react-redux";
import Splash from "./Splash";
import { reset } from "../../../data/action";

const mapDispatchToProps = (dispatch) => {

    return {
        handleClick: () => dispatch(reset())
    }
};

export default connect(null, mapDispatchToProps)(Splash);