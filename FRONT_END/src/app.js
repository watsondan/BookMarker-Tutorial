// app.js

import React from 'react';
import ReactDOM from 'react-dom';

import LandingPage from './layouts/LandingPage';

class Main extends React.Component {
    render() {
        return (
            <LandingPage />
        );
    }
}

const app = document.getElementById('app')
ReactDOM.render(<Main />, app)
