import React, { Component } from 'react';

import Dashboard from "./dashboard";
import Contactus from './contactus';
import Homepage from './homepage';


class MainApp extends Component {
    render() {
        return (
            <div>

                <Dashboard />
                <Contactus />
                <Homepage />


            </div>
        );
    }
}

export default MainApp;