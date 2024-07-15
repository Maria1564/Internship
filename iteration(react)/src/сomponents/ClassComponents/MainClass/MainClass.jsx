import React from "react";
import HeaderClass from "../HeaderClass/HeaderClass";
import NavClass from "../NavClass/NavClass";
import CardClass from "../Cardslass/CardClass";
import "./MainClass.css"

class MainClass extends React.Component {
   
    arrCads = [
        {
            name:"Тигрик",
            age: "2 года",
            isActive:  false
        },
        {
            name:"Джессика",
            age: "5 месяцев",
            isActive:  true
        },
        {
            name:"Рекс",
            age: "1 год",
            isActive:  false
        },
        {
            name:"Чауст",
            age: "3.5 года",
            isActive:  false
        },
    ]

    render() {
        return(
           <>
            <HeaderClass/>

            <NavClass/>
            
            <main className="content">

                <div className="cards">
                    {   
                        this.arrCads.map((elem, index)=>(
                            <CardClass elem={elem} isActive={elem.isActive} key={index}/>
                        ))
                    }
                </div>

                <div className="content__info">
                    <div className="content__info-wrapper">
                        <img src="https://i.pinimg.com/564x/62/aa/c5/62aac540ad60b83d5196d6def5b8c096.jpg" alt="avatar" style={{width: 100, height: 100}}  className="content__info-avatar"/>
                        <div className="content__info-about">
                            <h2 className="content__info-title">Джессика</h2>
                            <p className="content__info-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
                            perspiciatis facere voluptas voluptatibus necessitatibus, repellat magnam,
                            delectus earum magni eius expedita corporis nisi. 
                            </p>
                        </div>
                    </div>

                    <form action="" className="form content__form">
                        <h3 className="form__title">Заполните форму</h3>
                        <div className="form__inputs">
                            <input  type="text" id="username" name="username" placeholder="Имя" required/>
                
                            <input type="tel" pattern="\+7\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}"  name="phone" id="phone" placeholder="+7(___)___-__-__"   required />
                    
                            <input type="email" name="email" id="email" placeholder="email" required/>
                            <textarea  name="about-oneself" id="about-oneself" cols="30" rows="5" required placeholder="Немного о себе и почему заинтересовались питомцем?(после отправки формы мы вам перезвоним)"></textarea>
                        </div>
                        
                        <div className="form__btns">
                            <button type="submit" className="btn">Отправить</button>
                            <input type="reset" value="Очистить" id="inp-reset"/>
                        </div>  
                    </form>

                </div>
            </main>
           </>
        )
    }
}

export default MainClass