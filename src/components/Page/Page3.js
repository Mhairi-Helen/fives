import React from "react";
import ScoreCard from "../ScoreCard/ScoreCard";
import ResetScore from "../ResetScore";
import Reset from "../ResetAll";


const Page3 = () => {

    return (
        <div className="page">
            <header className="page__header">
                <h4>Step 3: Kick Off!</h4>
            </header>
            <ScoreCard />
            <div className="page__footer">
                <ResetScore />
                <Reset />
            </div>
        </div>
    )

}

export default Page3;