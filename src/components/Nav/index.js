import React from "react";

const Nav = () => {

    return (
        <nav
            role="navigation"
            className="dropdown"
        >
            <picture className="button--icon dropdown__btn">
                <img
                    className="icon "
                    src={require('../../assets/icons/hamburgerWhite.png')} alt="Menu icon" />
            </picture>

            <ul className="dropdown__content">
                <li><a
                    className="dropdown__item"
                    href="/">
                    Step 1: Enter Player Names</a></li>
                <li><a
                    className="dropdown__item"
                    href="/">
                    Step 2: Enter Player Names</a></li>
                <li><a
                    className="dropdown__item"
                    href="/">
                    Step 3: Kick Off!</a></li>
            </ul>
        </nav>

    )

}

export default Nav;