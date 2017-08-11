import React from 'react';
import ReactDOM from 'react-dom';
import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';

export default class LandingPage extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <Header />
                <p>This is my content...</p>
                <Footer />
            </div>
        );
    }
}
