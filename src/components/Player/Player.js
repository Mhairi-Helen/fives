import React, { Component } from 'react';



class Player extends Component {

    constructor(props) {
        super(props);

        //create local state for player name and experience
        this.state = {
            playerName: '',
            experience: '',
            error: {
                playerNameErr: '',
                experienceErr: '',
            }
        };

        this.handlePlayerName = this.handlePlayerName.bind(this);
        this.handleExperience = this.handleExperience.bind(this);
        this.handleSubmitPlayer = this.handleSubmitPlayer.bind(this);
    }

    //listens for the value of the player name entered 
    handlePlayerName = (e) => {
        this.setState({ playerName: e.currentTarget.value })
    }

    //listens for the level of experience selected 
    handleExperience = (e) => {
        this.setState({ experience: e.currentTarget.value })
    }


    //saves form inputs on submission
    handleSubmitPlayer = (e) => {
        e.preventDefault();

        this.props.handleSubmitPlayer({ ...this.state })

        this.setState({
            playerName: '',
            experience: '',
        })
    }

    // {playerNameErr ? <small>{playerNameErr}</small> : null}

    render() {

        const { playerName } = this.state;

        return (
            <div>
                <form onSubmit={this.handleSubmitPlayer} >
                    <div>
                        <label htmlFor="playerName">Name:</label>
                        <input
                            type="text"
                            name="playerName"
                            id="playerName"
                            placeholder="Enter name"
                            value={playerName}
                            onChange={this.handlePlayerName} />

                    </div>

                    <fieldset>
                        <p>Experience:</p>

                        <label className="radio__container" htmlFor="beginner">
                            <input
                                className="radio__button"
                                name="playerExperience"
                                id="beginner"
                                type="radio"
                                value="beginner"
                                onChange={this.handleExperience} />

                            <span className="radio__button--img">
                                <img
                                    className="radio__img"
                                    src={require("../../assets/icons/beginner.png")}
                                    alt="1 Stars" />
                            </span>
                        </label>

                        <label className="radio__container" htmlFor="intermediate">
                            <input
                                className="radio__button"
                                name="playerExperience"
                                id="intermediate"
                                type="radio"
                                value="intermediate"
                                onChange={this.handleExperience} />

                            <span className="radio__button--img">
                                <img
                                    className="radio__img"
                                    src={require("../../assets/icons/intermediate.png")}
                                    alt="2 Stars" />
                            </span>
                        </label>

                        <label className="radio__container" htmlFor="advanced">
                            <input
                                className="radio__button"
                                name="playerExperience"
                                id="advanced"
                                type="radio"
                                value="advanced"
                                onChange={this.handleExperience} />

                            <span className="radio__button--img">
                                <img
                                    className="radio__img"
                                    src={require("../../assets/icons/advanced.png")}
                                    alt="3 Stars" />
                            </span>
                        </label>
                    </fieldset>

                    <section >
                        <button className="button--secondary" type="submit" name="submit">
                            Enter
                        </button>
                    </section>
                </form>
            </div>
        )
    }
};

export default Player;