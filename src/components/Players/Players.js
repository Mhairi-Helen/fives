import React, { Component, Fragment } from 'react';
import Reset from "../Reset/ResetAll";


class Players extends Component {



    render() {

        const { players, handleDelete, handleGenerate, teamsGenerated } = this.props;

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

                <button
                    className={"button--primary" + (teamsGenerated || (players.length < 3) ? " disabled" : "")}
                    onClick={handleGenerate}
                    disabled={teamsGenerated || (players.length < 3)}>
                    <a href="/step2">Generate Teams</a>
                </button>

                <Reset />
            </Fragment >
        )
    }
}



export default Players;