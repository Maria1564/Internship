import {memo} from 'react'
import { ICardPet } from '../../../interfaces'

type CardProps = {
    elem:  ICardPet;
    isActive: boolean;
    selectCard: (idCard: number) => void
}

const Card = memo(({isActive, selectCard, elem}: CardProps) => {
    console.log(isActive,elem)
  return (
      <div className={`card ${isActive ? "card--active": ""}`} onClick={()=>selectCard(elem.id)}>
          <div className="card__description">
              <span className="card__name">{elem.name}</span>
              <span className="card__age">{elem.age}</span>
          </div>
      </div>
  )
 
})

export default Card