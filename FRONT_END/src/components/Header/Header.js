import React from 'react';
import ReactDOM from 'react-dom';

export default class Header extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <header>
                <h1>This is the Header!</h1>
            </header>
        );
    }
}
