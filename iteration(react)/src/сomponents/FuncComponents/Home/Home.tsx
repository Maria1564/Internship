import { useCallback, useContext, useEffect,  } from "react";
import Form from "../Form/Form";
import Card from "../Card/Card";
import { useSort } from "../Hook/useSort";
import type {ContextType, ICardPet} from "../../../interfaces" 
import { Context } from "../../../context";


const Home = () => {
  type SelectCardFunc = (idCard: number) => void

  const  context = useContext<ContextType | null>(Context)

  const listDogs = context?.listDogs || []; 
  const idActiveDog = context?.idActiveDog; 
  const selectIdActiveDog = context?.selectIdActiveDog

  const sortArr = useSort<ICardPet, "name">(listDogs, "name")
  
  useEffect(()=>{
    console.log("Компонент создан")
    
    return () => console.log("Компонент будет удалён")
  }, [])
  
  useEffect(()=>{
    console.log("id текущей карточки равно ", idActiveDog)
  }, [idActiveDog])
  
  const selectCard = useCallback<SelectCardFunc>((idCard) => {
    if (selectIdActiveDog) {
      selectIdActiveDog(idCard);
    }
  }, [selectIdActiveDog])

    return (
    <>
      <div className="cards">
        {sortArr.map((elem) => (
          <Card
            elem={elem}
            isActive={elem.id === idActiveDog}
            key={elem.id}
            selectCard={selectCard}
          />
        ))}
      </div>

      <div className="content__info">
        <div className="content__info-wrapper">
          <img
            src="https://i.pinimg.com/564x/62/aa/c5/62aac540ad60b83d5196d6def5b8c096.jpg"
            alt="avatar"
            style={{ width: 100, height: 100 }}
            className="content__info-avatar"
          />
          <div className="content__info-about">
            <h2 className="content__info-title">Джессика</h2>
            <p className="content__info-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda perspiciatis facere voluptas voluptatibus
              necessitatibus, repellat magnam, delectus earum magni eius
              expedita corporis nisi.
            </p>
          </div>
        </div>

        <Form />
        </div>
    </>
  );
  
}

export default Home;
