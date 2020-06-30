import React from 'react';
import { Link } from "react-router-dom";
import Team1 from '../TeamList/Team1';
import Team2 from '../TeamList/Team2';
import TeamNames from '../TeamNames';

const Page2 = () => {

    return (
        < div className="page--two">
            <header className="page__header--two">
                <h4>Step 2: Choose Team Name</h4>
            </header>
            <TeamNames />
            <Team1 />
            <Team2 />
            <button
                className={"button--primary"}>
                <Link to="/step3">On to Step 3</Link>
            </button>
        </div >
    )
}


export default Page2;