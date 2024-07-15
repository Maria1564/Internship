import React, {Component} from "react"
import "./Header.css"

class HeaderClass extends Component {
    render(){
        return(
            <header className="header">
                <div className="header__wrapper">
                    <h1 className="header__title">ТВОЙ ЧЕТВЕРОНОГОЙ ДРУГ!</h1>
                    <p className="header__text">В нашеи приюте ты можешь выбрать себе одного или нескольких питомцев совсем <strong>бесплатно</strong>!</p>
                </div>
            </header>
        )
    }
}

export default HeaderClass
