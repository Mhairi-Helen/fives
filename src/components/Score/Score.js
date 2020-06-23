import React from "react";


const Score = ({ }) => {

    return (

        <div >
            <div>
                <h5>{ScoreName}</h5>
                <div >
                    <p>{score}</p>
                </div>
                <div>
                    <button disabled={winner} onClick={handleClick}>+</button>
                </div>
            </div>
        </div>
    )
}

export default Score;