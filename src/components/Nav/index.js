import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {

    return (
        <nav
            role="navigation"
            className="dropdown"
        >
            <picture className="button--icon dropdown__btn">
                <img
                    className="icon"
                    src={require('../../assets/icons/hamburgerWhite.png')} alt="Menu icon" />
            </picture>

            <ul className="dropdown__content">
                <li><Link
                    className="dropdown__item"
                    to="/step1">
                    Step 1: Enter Player Names</Link></li>
                <li><Link
                    className="dropdown__item"
                    to="/step2">
                    Step 2: Enter Player Names</Link></li>
                <li><Link
                    className="dropdown__item"
                    to="/step3">
                    Step 3: Kick Off!</Link></li>
            </ul>
        </nav>

    )

}

export default Nav;