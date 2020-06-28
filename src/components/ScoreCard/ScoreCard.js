import React, { Component } from "react";
import ScoreTeam1 from "../Score/ScoreTeam1";
import ScoreTeam2 from "../Score/ScoreTeam2";
import Reset from "../Reset";

const ScoreCard = () => {

    return (
        <div className="card">

            <section className="card__score">
                <ScoreTeam1 />
            </section>
            <section className="card__score">
                <ScoreTeam2 />
            </section>

            <section className="card__button--reset">
                <Reset />
            </section>
        </div >
    )
}


export default ScoreCard;