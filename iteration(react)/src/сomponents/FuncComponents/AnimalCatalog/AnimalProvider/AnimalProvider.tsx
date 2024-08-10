import { ICardPet, CatOrDog } from "../../../../interfaces"

type AnimalProviderProps = {
  selectAnimal: CatOrDog;
  render: (data: ICardPet[]) => JSX.Element
}

const AnimalProvider = (props: AnimalProviderProps) => {
    const dataAnimal = {
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


    return (
      props.render(dataAnimal[props.selectAnimal])
    )
}

export default AnimalProvider