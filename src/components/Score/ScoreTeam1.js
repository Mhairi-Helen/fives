import { connect } from "react-redux";
import Score from "./Score";
import { score1Add, score1Minus } from "../../data/actions";

const mapStateToProps = (state) => {

    return {
        teamName: state.team1Name,
        score: state.scoreTeam1,
        winner: state.winner,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleClickPlus: () => dispatch(score1Add()),
        handleClickMinus: () => dispatch(score1Minus())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Score);