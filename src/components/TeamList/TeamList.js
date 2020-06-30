import React, { Component, Fragment } from 'react';


class TeamList extends Component {



    render() {

        const { teamName, team, colours1 } = this.props;

        return (
            <div>
                <div div className="card">
                    <ul className="card__list">
                        <h5>{teamName}</h5>

                        {colours1 ?
                            <picture className="card__img">
                                <img
                                    className="icon"
                                    src={require('../../assets/icons/strip1.png')} alt="Football strip icon" />
                            </picture> :
                            <picture className="card__img">
                                <img
                                    className="icon"
                                    src={require('../../assets/icons/strip2.png')} alt="Football strip icon" />
                            </picture>
                        }

                        {team.map((player, index) => (
                            <li className="card__list--item" key={index} id={index}>
                                <section>
                                    <p> {player.playerName}</p>
                                </section>

                                <section>
                                    <p> {player.experience}</p>
                                </section>


                                {/* <picture className="card-img__container">
                            <img className="card-img" alt="" src={campsite.img}></img>
                        </picture> */}
                            </li>
                        ))
                        }
                    </ul>
                </div >
            </div>
        )
    }
}



export default TeamList;