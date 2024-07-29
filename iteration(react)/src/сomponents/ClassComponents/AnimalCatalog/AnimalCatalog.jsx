import React, { Component } from 'react'
import AnimalProvider from './AnimalProvider/AnimalProvider'
import List from './List/List'
import "./AnimalCatalog.css"

export class AnimalCatalog extends Component {
  state={selectAnimal: "cat"}

  componentDidMount() {
    console.log("Создался компонент AnimalCatalog")
  }

  componentDidUpdate(_, prevState){
    console.log("Компонент AnimalCatalog обновлён")
    if(prevState.selectAnimal !== this.state.selectAnimal){
      console.log(`${prevState.selectAnimal} переключено на ${this.state.selectAnimal}`)
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
            <button className="btn" onClick={()=> this.setState({selectAnimal: "cat"})}>Кошки</button>
            <button className='btn' onClick={()=> this.setState({selectAnimal: "dog"})}>Собаки</button>
          </div>

            <AnimalProvider selectAnimal={this.state.selectAnimal} render={ data=>
              <>
              <h2>{this.state.selectAnimal === "cat" ? "Кошки" : "Собаки"}</h2>
                <List listAnimals={data}/>
              </> }/>
        </div>
      </div>
    )
  }
}

export default AnimalCatalog