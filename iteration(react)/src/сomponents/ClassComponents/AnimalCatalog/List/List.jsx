import { Component } from "react";
import "./List.css"

class List extends Component {


  render() {
    return (
        console.log(this.props.listAnimals)||
      <div className="list">
        {this.props.listAnimals.map((elem) => (console.log(elem)||
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
