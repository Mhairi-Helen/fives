import React from "react";


const Reset = ({ handleClick }) => {
    return (
        < button
            className="button--secondary"
            onClick={handleClick}
        >Reset</button >
    );
};

export default Reset;