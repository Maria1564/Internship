import { Component } from 'react'

export class AnimalProvider extends Component {
    dataAnimal = {
        cat: [
          {
            id: 101,
            name:"Тигрик",
            age: "2 года",
          },
          {
            id: 102,
            name:"Чауст",
            age: "3.5 года",
          },
          {
            id: 103,
            name: "Плюша",
            age: "8 месяцев",
          },
          {
            id: 104,
            name: "Кнопа",
            age: "3 года",
          },
        ],
        dog: [
          {
            id: 108,
            name:"Джессика",
            age: "5 месяцев",
          },
          {
            id: 109,
            name:"Рекс",
            age: "1 год",
          },
        ],
    }


  render() {
    return (
      this.props.render(this.dataAnimal[this.props.selectAnimal])
    )
  }
}

export default AnimalProvider