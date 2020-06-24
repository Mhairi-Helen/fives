import { connect } from "react-redux";
import Score from "./Score";
import { score2Add, score2Minus } from "../../data/actions";

const mapStateToProps = (state) => {

    return {
        teamName: state.team2Name,
        score: state.scoreTeam2,
        winner: state.winner,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleClickPlus: () => dispatch(score2Add()),
        handleClickMinus: () => dispatch(score2Minus())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Score);