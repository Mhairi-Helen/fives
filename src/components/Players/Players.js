import React, { Component } from 'react';
import Reset from '../ResetAll/index';


class Players extends Component {



    render() {

        const { players, handleDelete, handleGenerate, teamsGenerated } = this.props;

        return (
            <div className="card">
                <h5>Players</h5>
                <ul className="card__list">
                    {players.map((player, index) => (
                        <li className="card__list--item" key={index} id={index}>

                            <p> {player.playerName}</p>
                            <p> {player.experience}</p>

                            {/* <picture className="card-img__container">
                            <img className="card-img" alt="" src={campsite.img}></img>
                        </picture> */}

                            < button
                                className="button--secondary--small"
                                onClick={() => handleDelete(index)}
                            >Delete</button >
                        </li>
                    ))}
                </ul>

                <button
                    className={"button--primary" + (teamsGenerated || (players.length < 3) ? " disabled" : "")}
                    onClick={handleGenerate}
                    disabled={teamsGenerated || (players.length < 3)}>
                    Generate Teams
                </button>

                <Reset />
                <button
                    className={"button--primary"}>
                    <a href="/step2">On to Step 2</a>
                </button>
            </div >
        )
    }
}



export default Players;