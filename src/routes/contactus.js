import React, { Component } from 'react';

class Contactus extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userMessage: "",
            isSubmitted: false
        }
        this.isSubmitted = false
    }

    onChangeUserMessage = (e) => {
        this.setState({
            userMessage: e.target.value
        })
    }

    submitMessage = (e) => {
        this.setState({
            isSubmitted: true
        })
    }
    deleteMessage = (e) => {
        this.setState({
            isSubmitted: false,
            userMessage: ""
        })
    }


    render() {
        return (
            <div style={{ marginLeft: "200px" }}>
                <h3>Contact US</h3>
                <input type="text"
                    value={this.state.userMessage}
                    onChange={e => this.onChangeUserMessage(e)} />
                <br />
                <button onClick={e => this.submitMessage(e)}>Submit Me</button>

                {this.state.isSubmitted ? <div>

                    <hr />
                    Your Message : {this.state.userMessage}

                    <br />

                    <button onClick={e => this.deleteMessage(e)}>Delete Your Message</button>
                </div> : ""
                }
            </div>
        );
    }
}

export default Contactus;