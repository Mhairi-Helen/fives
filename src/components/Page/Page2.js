import React from 'react';
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


        </div >
    )
}


export default Page2;