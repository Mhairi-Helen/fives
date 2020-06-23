import { connect } from "react-redux";
import Winner from "./Winner";

//1. Destructuring
//2. Auto Key Naming
//3.Fat arrown single line

const mapStateToProps = ({ winner }) => ({ winner });


export default connect(mapStateToProps)(Winner);