import React from "react";


const Score = ({ teamName, score, winner, handleClickPlus, handleClickMinus }) => {

    return (

        <div>
            <h5>{teamName}</h5>
            <div >
                <p
                    className="score"
                >{score}</p>
            </div>
            <div>
                <button
                    className="button--primary"
                    disabled={winner}
                    onClick={handleClickMinus}
                >-</button>
                <button
                    className="button--primary"
                    disabled={winner}
                    onClick={handleClickPlus}
                >+</button>
            </div>
        </div>
    )
}

export default Score;