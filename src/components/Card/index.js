import React, { Component } from "react";
import ScoreTeam1 from "../Score/ScoreTeam1";
import ScoreTeam2 from "../Score/ScoreTeam2";
import Reset from "../Reset";

class Card extends Component {


    render() {

        return (
            <div className="card">

                <header className="card__header">
                    <h4>Step 3: Kick Off!</h4>
                </header>

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
}

export default Card;