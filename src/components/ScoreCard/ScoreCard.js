import React from "react";
import ScoreTeam1 from "../Score/ScoreTeam1";
import ScoreTeam2 from "../Score/ScoreTeam2";
import ResetScore from "../ResetScore";
import Reset from "../ResetAll";

const ScoreCard = () => {

    return (
        <div className="card">

            <section className="card__score">
                <picture className="head--logo">
                    <img
                        className="icon"
                        src={require('../../assets/icons/strip1.png')} alt="Football strip icon" />
                </picture>
                <ScoreTeam1 />
            </section>
            <section className="card__score">
                <picture className="head--logo">
                    <img
                        className="icon"
                        src={require('../../assets/icons/strip2.png')} alt="Football strip icon" />
                </picture>
                <ScoreTeam2 />
            </section>

            <section className="card__button--reset">
                <ResetScore />
                <Reset />
            </section>
        </div >
    )
}


export default ScoreCard;