import { connect } from "react-redux";
import Player from "./Player";
import { player1 } from "../../data/actions";

const mapStateToProps = (state) => {

    return {
        playerName: state.player1Name,
        score: state.player1,
        winner: state.winner,
        server: state.player1Serve,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => dispatch(player1()),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Player);

