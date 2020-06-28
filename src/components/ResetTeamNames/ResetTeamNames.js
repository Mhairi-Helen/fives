import React from "react";

//resets team names
const ResetTeamNames = ({ handleClick }) => {
    return (
        < button
            className="button--secondary"
            onClick={handleClick}>
            Reset Team Names</button >
    );
};

export default ResetTeamNames;