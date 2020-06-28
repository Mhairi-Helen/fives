import { connect } from "react-redux";
import Player from "./Player";
import { addPlayer } from "../../data/actions";


const mapDispatchToProps = dispatch => {
    return {
        handleSubmitPlayer: data => dispatch(addPlayer(data))
    };
};

export default connect(null, mapDispatchToProps)(Player);