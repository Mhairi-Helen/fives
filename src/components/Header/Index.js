import React from "react";
import Nav from "../Nav";
import { Link } from "react-router-dom";

const Head = () => {

    return (
        <div className="head--main">

            <header className="head--brand">
                <picture className="head--logo">
                    <img
                        className="icon"
                        src={require('../../assets/icons/football3.png')} alt="Football icon" />

                </picture>
                <h1><Link to="/">Fives</Link></h1>
            </header>
            <Nav />
        </div>

    )


}

export default Head;