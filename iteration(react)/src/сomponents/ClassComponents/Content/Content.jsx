import React, { Component } from 'react'
import Form from '../Form/Form'
import Card from '../Card/Card'
import "./Content.css"

export class Content extends Component {
    
    state =  {idCardActive: 2}
    arrCads = [
        {
            id: 1,
            name:"Тигрик",
            age: "2 года",
        },
        {
            id:  2,
            name:"Джессика",
            age: "5 месяцев",
        },
        {
            id: 3,
            name:"Рекс",
            age: "1 год",
        },
        {
            id: 4,
            name:"Чауст",
            age: "3.5 года",
        },
    ]
    
  render() {
    return (
        <main className="content">

        <div className="cards">
            {   
                this.arrCads.map((elem)=>{
                    if(elem.id == this.state.idCardActive ){
                        return <Card elem={elem} isActive key={elem.id} setState = {this.setState.bind(this)}/>
                    }
                    return <Card elem={elem}  key={elem.id} setState = {this.setState.bind(this)}/>
                })
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

           <Form/>
        </div>
    </main>
    )
  }
}

export default Content