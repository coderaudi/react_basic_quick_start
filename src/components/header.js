import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import "./header.css";
class Header extends Component {
    render() {
        return (
            <div>
                <div style={{ background: "green", textAlign: "center" }} >
                    <h1>Happy Coding_Webheader</h1>
                    <hr />

                </div>
                <div>
                    <ul style={{ background: "red" }}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        <li><Link to='/contactus'>Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;