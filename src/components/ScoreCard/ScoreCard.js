import React from "react";
import ScoreTeam1 from "../Score/ScoreTeam1";
import ScoreTeam2 from "../Score/ScoreTeam2";
import ResetScore from "../ResetScore";
import Reset from "../ResetAll";

const ScoreCard = () => {

    return (
        <div className="page">
            <header className="page__header">
                <h4>Step 3: Kick Off!</h4>
            </header>

            <div className="card" >
                <picture className="card__img">
                    <img
                        className="icon"
                        src={require('../../assets/icons/strip1.png')} alt="Football strip icon" />
                </picture>
                <ScoreTeam1 />
            </div>

            <div className="card">
                <picture className="card__img">
                    <img
                        className="icon"
                        src={require('../../assets/icons/strip2.png')} alt="Football strip icon" />
                </picture>
                <ScoreTeam2 />
            </div>

            <div>
                <ResetScore />
                <Reset />
            </div>
        </div >
    )
}


export default ScoreCard;