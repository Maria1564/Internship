import React from 'react'

const Card = ({isActive, setIdActiveCrd, elem}) => {
    console.log(isActive,elem)
  return (
      <div className={`card ${isActive ? "card--active": ""}`} onClick={()=>setIdActiveCrd(elem.id)}>
          <div className="card__description">
              <span className="card__name">{elem.name}</span>
              <span className="card__age">{elem.age}</span>
          </div>
      </div>
  )
 
}

export default Card