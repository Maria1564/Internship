import React, { Component } from 'react'
import "./Card.css"
import { ICardPet } from '../../../interfaces'


interface ICardProps {
  elem: ICardPet;
  isActive: boolean;
  setState: (state: {idCardActive: number}) => void
}
export class Card extends Component<ICardProps> {

  render() {
    return (
        <div className={`card ${this.props.isActive ? "card--active": ""}`} onClick={()=>this.props.setState({ idCardActive: this.props.elem.id })}>
            <div className="card__description">
                <span className="card__name">{this.props.elem.name}</span>
                <span className="card__age">{this.props.elem.age}</span>
            </div>
        </div>
    )
  }
}

export default Card