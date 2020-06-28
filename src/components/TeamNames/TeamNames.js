import React, { Component, Fragment } from 'react';



class TeamNames extends Component {

    constructor(props) {
        super(props);

        //create local state for error for form validation
        this.state = {
            team1Name: '',
            team2Name: '',
            error: '',
        };

        this.handleTeam1Name = this.handleTeam1Name.bind(this);
        this.handleTeam2Name = this.handleTeam2Name.bind(this);
        this.handleSubmitNames = this.handleSubmitNames.bind(this);
    }

    //listens for the value of the teamName1
    handleTeam1Name = (e) => {
        this.setState({ team1Name: e.currentTarget.value })
    }

    //listens for the value of the teamName2
    handleTeam2Name = (e) => {
        this.setState({ team2Name: e.currentTarget.value })
    }


    //saves form inputs on submission
    handleSubmitNames = (e) => {
        e.preventDefault();

        let { team1Name, team2Name, error } = this.state;


        if (team1Name.length < 1) {

            this.setState({ error: "Please provide a team name" });

        } else if (team2Name.length < 1) {

            this.setState({ error: "Please provide a team name" });
        } else {
            this.props.handleSubmitTeamNames({ ...this.state })
            this.setState({
                team1Name: '',
                team2Name: '',
                error: '',
            })
        };
    };


    render() {

        const { team1Name, team2Name, error } = this.state;
        const { teamsGenerated } = this.props;

        return (
            <Fragment>
                <div>
                    <form onSubmit={this.handleSubmitNames} >

                        <div>
                            <label htmlFor="team1Name">Team 1 Name:</label>
                            <input
                                type="text"
                                name="team1Name"
                                id="team1Name"
                                placeholder="Enter team name"
                                value={team1Name}
                                onChange={this.handleTeam1Name} />
                            {error ? <small className="invalid-feedback">{error}</small> : ''}
                        </div>

                        <div>
                            <label htmlFor="team1Name">Team 2 Name:</label>
                            <input
                                type="text"
                                name="team2Name"
                                id="team2Name"
                                placeholder="Enter team name"
                                value={team2Name}
                                onChange={this.handleTeam2Name} />
                            {error ? <small className="invalid-feedback">{error}</small> : ''}
                        </div>

                        <section >
                            <button
                                className={"button--secondary" + (team1Name.length < 3 && team2Name.length < 3 ? " disabled" : "")}
                                type="submit"
                                name="submit"
                                disabled={team1Name.length < 3 && team2Name.length < 3}>
                                Enter
                            </button>

                        </section>
                    </form>
                    <button
                        className={"button--primary"}>
                        <a href="/step3">On to Step 3</a>
                    </button>
                </div>
            </Fragment>
        )
    };
};

export default TeamNames;