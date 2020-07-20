import React, { Component } from 'react'

export default class Roomcard extends Component {
    render() {
        return (
            <div>
                <img src={this.props.roomImage} />
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                <ul>
                    <li>{this.props.surfacearea}</li>
                    <li>{this.props.capacity}</li>
                    <li>{this.props.setups}</li>
                </ul>
                <button>Reserveren</button>
            </div>
        )
    }
}
