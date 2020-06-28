import React from "react";

//resets full state and takes user back to home page to restart
const Reset = ({ handleClick }) => {
    return (
        < button
            className="button--secondary"
            onClick={handleClick}
        ><a href="/step1">Restart</a></button >
    );
};

export default Reset;