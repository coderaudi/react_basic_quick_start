import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Dashboard from "./dashboard";
import Contactus from './contactus';
import Homepage from './homepage';


class MainApp extends Component {
    render() {
        return (
            <div>

                Main App
                {/* <Router>
                    <div>
                        <h2>Welcome to React Router Tutorial</h2>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <ul className="navbar-nav mr-auto">
                                <li><Link to={'/'} className="nav-link"> Home </Link></li>
                                <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
                                <li><Link to={'/dashboard'} className="nav-link">dashboard</Link></li>
                            </ul>
                        </nav>
                        <hr />
                        <Switch>
                            <Route exact path='/' component={Homepage} />
                            <Route path='/contact' component={Contactus} />
                            <Route path='/dashboard' component={Dashboard} />
                        </Switch>
                    </div>
                </Router> */}

            </div>
        );
    }
}

export default MainApp;