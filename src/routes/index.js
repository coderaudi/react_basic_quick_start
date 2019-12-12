import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Dashboard from "./dashboard";
import Contactus from './contactus';
import Homepage from './homepage';


class MainApp extends Component {
    render() {
        return (
            <div>



                <Switch>
                    <Route exact path='/' component={Homepage} />
                    <Route path='/contactus' component={Contactus} />
                    <Route path='/dashboard' component={Dashboard} />
                </Switch>

            </div>
        );
    }
}

export default MainApp;