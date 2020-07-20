import React, { Component } from 'react'
import Roomcard from './Roomcard'

export default class LandingPageContainer extends Component {
    render() {
        return (
            <div>
                <Roomcard 
                    title="De nieuwe zaal"
                    description="De nieuwe zaal is onze grootste zaal en is dé plek voor events!"
                    surfacearea="143 m2"
                    capacity="max. 112"
                    setups="Opstellingen"
                />

                <Roomcard
                    title="De nieuwe zaal"
                    description="De nieuwe zaal is onze grootste zaal en is dé plek voor events!"
                    surfacearea="143 m2"
                    capacity="max. 112"
                    setups="Opstellingen" />

            </div>
        )
    }
}

