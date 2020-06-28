import React from 'react';


const Home = () => {

    return (
        < div className="home" >
            <header >
                <h1 className="home__header">Fives</h1>
                <h2 className="home__header--sub"><a href="/step1">[Enter Here]</a></h2>
            </header>


            <picture className="home__brand">
                <img
                    className="home__logo"
                    src={require('../../assets/icons/football2.png')} alt="Bouncing Football icon" />

            </picture>
        </div >
    )
}


export default Home;