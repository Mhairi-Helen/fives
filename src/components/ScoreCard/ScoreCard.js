import React, { Fragment } from "react";
import ScoreTeam1 from "../Score/ScoreTeam1";
import ScoreTeam2 from "../Score/ScoreTeam2";


const ScoreCard = () => {

    return (
        <Fragment>


            <div >
                <picture className="card__img">
                    <img
                        className="icon"
                        src={require('../../assets/icons/strip1.png')} alt="Football strip icon" />
                </picture>
                <ScoreTeam1 />
            </div>


            <div >
                <picture className="card__img">
                    <img
                        className="icon"
                        src={require('../../assets/icons/strip2.png')} alt="Football strip icon" />
                </picture>
                <ScoreTeam2 />
            </div>

        </Fragment >
    )
}


export default ScoreCard;