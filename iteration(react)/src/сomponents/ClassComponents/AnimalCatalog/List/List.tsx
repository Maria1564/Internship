import { Component } from "react";
import "./List.css"
import type {ICardPet} from "../../../../interfaces"

interface IListProps {
  listAnimals: ICardPet[]
}
class List extends Component<IListProps> {


  render() {
    return (
      <div className="list">
        {this.props.listAnimals.map((elem) => (
          <div className="list__card" key={elem.id}>
            <span className="card__name">{elem.name}</span>
            <span className="card__age">{elem.age}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default List;
