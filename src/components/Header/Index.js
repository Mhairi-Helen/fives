import React from "react";
import Nav from "../Nav";

const Head = () => {

    return (
        <div className="head--main">

            <header className="head--brand">
                <picture className="head--logo">
                    <img
                        className="icon"
                        src={require('../../assets/icons/football3.png')} alt="Football icon" />

                </picture>
                <h1><a href="/">Fives</a></h1>
            </header>
            <Nav />
        </div>

    )


}

export default Head;