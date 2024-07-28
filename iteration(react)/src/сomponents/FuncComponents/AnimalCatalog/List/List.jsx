import React from "react";

const List = ({listAnimals}) => {


    return (
        console.log(listAnimals)||
      <div className="list">
        {listAnimals.map((elem) => (
          <div className="list__card" key={elem.id}>
            <span className="card__name">{elem.name}</span>
            <span className="card__age">{elem.age}</span>
          </div>
        ))}
      </div>
    );
}

export default List;
