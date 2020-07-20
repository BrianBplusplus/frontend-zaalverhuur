import React, { Component } from 'react'

import logo from '../img/dnblogo.jpg' 

export default class header extends Component {
    render() {
        return (
            <div>
                <img src={logo} />
                Vergaderruimtes inloggen Terug naar Bibliotheek
            </div>
        )
    }
}
