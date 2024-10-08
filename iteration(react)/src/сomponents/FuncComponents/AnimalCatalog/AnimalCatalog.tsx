import { useState } from 'react'
import AnimalProvider from './AnimalProvider/AnimalProvider'
import List from './List/List'
import { CatOrDog, ICardPet } from '../../../interfaces'

const AnimalCatalog = () => {
  
  const [selectAnimal, setSelectAnimal] = useState<CatOrDog>("cat")
  return (
    <div className="catalog">
      <div className='catalog__wrapper'>
        <div className="catalog__btns">
          <button className="btn" onClick={()=> setSelectAnimal("cat")}>Кошки</button>
          <button className='btn' onClick={()=> setSelectAnimal("dog")}>Собаки</button>
        </div>

          <AnimalProvider selectAnimal={selectAnimal} render={ (data: ICardPet[]) =>
            <>
              <h2>{selectAnimal === "cat" ? "Кошки" : "Собаки"}</h2>
              <List listAnimals={data}/>
            </> }/>
      </div>
    </div>
  )
}

export default AnimalCatalog