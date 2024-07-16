import React, { Component } from 'react'
import "./Card.css"

export class CardClass extends Component {

  render() {
    return (
        <div className={`card ${this.props.isActive ? "card--active": ""}`} onClick={()=>this.props.setState({ idCardActive: this.props.elem.id })}>
            <div className="card__description">
                <span className="card__name">{this.props.elem.name}</span>
                <span className="card__age">{this.props.elem.name}</span>
            </div>
        </div>
    )
  }
}

export default CardClass