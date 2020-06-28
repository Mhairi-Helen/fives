import React, { Component, Fragment } from 'react';


class TeamList extends Component {



    render() {

        const { teamName, team, teamsGenerated, colours1 } = this.props;

        return (
            <Fragment>
                <ul>
                    <h4>{teamName}</h4>

                    {colours1 ?
                        <picture className="head--logo">
                            <img
                                className="icon"
                                src={require('../../assets/icons/strip1.png')} alt="Football strip icon" />
                        </picture> :
                        <picture className="head--logo">
                            <img
                                className="icon"
                                src={require('../../assets/icons/strip2.png')} alt="Football strip icon" />
                        </picture>
                    }

                    {team.map((player, index) => (
                        <li key={index} id={index}>
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
            </Fragment >
        )
    }
}



export default TeamList;