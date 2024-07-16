import React, { Component } from 'react'
import FormClass from '../FormClass/FormClass'
import CardClass from '../CardsСlass/CardClass'
import "./Content.css"

export class ContentClass extends Component {

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
    return (
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

           <FormClass/>
        </div>
    </main>
    )
  }
}

export default ContentClass