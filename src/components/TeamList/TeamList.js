import React, { Component, Fragment } from 'react';


class TeamList extends Component {



    render() {

        const { teamName, team, teamsGenerated } = this.props;

        return (
            <Fragment>
                <ul>
                    <h4>{teamName}</h4>
                    {
                        team.map((player, index) => (
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