//actions to adjust score 1
export const score1Add = () => {
    return {
        type: "ADD_SCORE_1",
    }
};

export const score1Minus = () => {
    return {
        type: "MINUS_SCORE_1",
    }
};

//actions to adjust score 2
export const score2Add = () => {
    return {
        type: "ADD_SCORE_2",
    }
};

export const score2Minus = () => {
    return {
        type: "MINUS_SCORE_2",
    }
};


//action to reset state
export const reset = () => {
    return {
        type: "RESET",
    }
};