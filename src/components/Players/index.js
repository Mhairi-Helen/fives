import { connect } from 'react-redux';
import Players from './Players';
import { deletePlayer } from "../../data/actions";


const mapStateToProps = state => {

    return {
        players: state.players,
    };
};
const mapDispatchToProps = (dispatch) => {

    return {
        handleDelete: (index) => dispatch(deletePlayer(index))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Players);