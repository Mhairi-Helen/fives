import React from 'react';


const Home = () => {

    return (
        < div >
            <header>
                <h1>Fives</h1>
                <h3><a href="/step1">[Enter Here]</a></h3>
            </header>


            <picture className="head--logo">
                <img
                    className="icon"
                    src={require('../../assets/icons/football2.png')} alt="Bouncing Football icon" />

            </picture>
        </div >
    )
}


export default Home;