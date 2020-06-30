import React from "react";
import ScoreCard from "../ScoreCard/ScoreCard";
import ResetScore from "../ResetScore";
import Reset from "../ResetAll";


const Page3 = () => {

    return (
        <div className="page--three">
            <header className="page__header--two">
                <h4>Step 3: Kick Off!</h4>
            </header>
            <ScoreCard />
            <div className="page__footer--two grid__group--centre">
                <div>
                    <ResetScore />
                    <Reset />
                </div>
            </div>
        </div>
    )

}

export default Page3;