import React from 'react';
import { Link } from "react-router-dom";


const Splash = ({ handleClick }) => {

    return (
        < div className="home" >
            <header >
                <h1 className="home__header">Fives</h1>
                <h2 className="home__header--sub">
                    <Link
                        to="/step1"
                        onClick={handleClick}>
                        [Enter Here]
                    </Link>
                </h2>
            </header>

            <picture className="home__brand">
                <img
                    className="home__logo"
                    src={require('../../../assets/icons/football2.png')} alt="Bouncing Football icon" />
            </picture>
        </div >
    )
}


export default Splash;