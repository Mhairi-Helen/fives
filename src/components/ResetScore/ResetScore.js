import React from "react";

//resets the score only
const ResetScore = ({ handleClick }) => {
    return (
        < button
            className="button--secondary"
            onClick={handleClick}>
            Reset Score</button >
    );
};

export default ResetScore;