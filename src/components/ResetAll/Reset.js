import React from "react";
import { Link } from "react-router-dom";

//resets full state and takes user back to home page to restart
const Reset = ({ handleClick }) => {
    return (
        <button
            className="button--secondary"
            onClick={handleClick}
        ><Link to="/step1">Restart</Link></button >
    );
};

export default Reset;