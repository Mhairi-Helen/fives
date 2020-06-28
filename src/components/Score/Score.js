import React from "react";


const Score = ({ teamName, score, winner, handleClickPlus, handleClickMinus }) => {

    return (

        <div >
            <h5 className="card__align" >{teamName}</h5>
            <div >
                <p
                    className="score"
                >{score}</p>
            </div>
            <div className="card__align">
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