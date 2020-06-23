import { connect } from "react-redux";
import Player from "./Player";
import { player2 } from "../../data/actions";

const mapStateToProps = (state) => {

    return {
        playerName: state.player2Name,
        score: state.player2,
        winner: state.winner,
        server: !state.player1Serve,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => dispatch(player2()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);