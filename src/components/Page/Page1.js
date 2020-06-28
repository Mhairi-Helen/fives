import React from 'react';
import Player from '../Player/index';
import Players from '../Players/index';



const Page1 = () => {

    return (
        < div >
            <header>
                <h4>Step 1: Enter Player Names</h4>
            </header>
            <Player />
            <Players />
        </div >
    )
}


export default Page1;