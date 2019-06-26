import React, { Component } from 'react';
import './Header.css';

export class Header extends Component {
    render() {
        return (
            <div className="headline">
                <h1 className="text">Reddit Deal Notifier</h1>
            </div>
        )
    }
}