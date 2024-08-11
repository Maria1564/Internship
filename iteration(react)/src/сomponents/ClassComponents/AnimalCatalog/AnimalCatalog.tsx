import { Component } from 'react'
import AnimalProvider from './AnimalProvider/AnimalProvider'
import List from './List/List'
import "./AnimalCatalog.css"
import type { CatOrDog, ICardPet } from "../../../interfaces/";


interface IAnimalCatalogState {
  selectedAnimal:CatOrDog
}

interface IAnimalCatalogProps {}

export class AnimalCatalog extends Component<IAnimalCatalogProps, IAnimalCatalogState> {
  state:IAnimalCatalogState={selectedAnimal: "cat"}

  componentDidMount() {
    console.log("Создался компонент AnimalCatalog")
  }

  componentDidUpdate(_: IAnimalCatalogProps, prevState: IAnimalCatalogState){
    console.log("Компонент AnimalCatalog обновлён")
    if(prevState.selectedAnimal !== this.state.selectedAnimal){
      console.log(`${prevState.selectedAnimal} переключено на ${this.state.selectedAnimal}`)
    }
  }

  componentWillUnmount(){
    console.log("Компонент AnimalCatalog сейчас будет удалён")
  } 

  render() {
    return (
      <div className="catalog">
        <div className='catalog__wrapper'>
          <div className="catalog__btns">
            <button className="btn" onClick={()=> this.setState({selectedAnimal: "cat"})}>Кошки</button>
            <button className='btn' onClick={()=> this.setState({selectedAnimal: "dog"})}>Собаки</button>
          </div>

            <AnimalProvider selectedAnimal={this.state.selectedAnimal} render={ (data: ICardPet[]) =>
              <>
              <h2>{this.state.selectedAnimal === "cat" ? "Кошки" : "Собаки"}</h2>
                <List listAnimals={data}/>
              </> }/>
        </div>
      </div>
    )
  }
}

export default AnimalCatalog