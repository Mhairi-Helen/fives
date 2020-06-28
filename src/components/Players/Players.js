import React, { Component, Fragment } from 'react';


class Players extends Component {



    render() {

        const { players, handleDelete } = this.props;

        return (
            <Fragment>
                <h4>Players</h4>
                <ul>
                    {players.map((player, index) => (
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

                            < button
                                className="button--secondary"
                                onClick={() => handleDelete(index)}
                            >Delete</button >
                        </li>
                    ))}
                </ul>
            </Fragment >
        )
    }
}



export default Players;