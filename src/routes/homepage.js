import React, { Component } from 'react';

class Homepage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userMessage: "Welcome to home page",
            userAgent: "",
            userDevice: "",
            locationData: null
        }
    }

    componentDidMount() {
        let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        console.log(window.location);
        this.setState({
            userAgent: navigator.userAgent,
            userDevice: isMobile ? "Mobile" : "Laptop/Desktop",
            locationData: window.location
        })

    }

    render() {
        let myLocation = this.state.locationData;
        return (
            <div>
                <h3>Home page</h3><br />
                <div style={{ background: "gray", margin: "20px", width: "500px" }}>

                    userMessage :  {this.state.userMessage} <br />
                    userAgent : {this.state.userAgent} <br />
                    userDevice : {this.state.userDevice}
                    <hr />
                    basic location details
                    {myLocation ?
                        <div>
                            Origin :{myLocation.origin} <br />
                            Host : {myLocation.host} <br />

                            Port : {myLocation.port} <br />

                            Protocol : {myLocation.protocol} <br />

                        </div> : "No location Data"}
                </div>
            </div>
        );
    }
}

export default Homepage;