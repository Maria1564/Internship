import React, { Component } from 'react'
import "./Card.css"

export class CardClass extends Component {
  render() {
    return (
    console.log(this)||

        <div className={`card ${this.props.isActive ? "card--active": ""}`}>
            <div className="card__description">
                <span className="card__name">{this.props.elem.name}</span>
                <span className="card__age">{this.props.elem.name}</span>
            </div>
        </div>
    )
  }
}

export default CardClass