import React, { Component } from 'react'
import "./Header.css"


export class HeaderClassJs extends Component {
  render() {
    return (
        React.createElement(
            "header",
            { className: "header" },
            React.createElement(
                "div",
                { className: "header__wrapper" },
                React.createElement(
                    "h1",
                    { className: "header__title" },
                    "ТВОЙ ЧЕТВЕРОНОГОЙ ДРУГ!"
                ),
                React.createElement(
                    "p",
                    { className: "header__text" },
                    "В нашеи приюте ты можешь выбрать себе одного или нескольких питомцев совсем",
                    React.createElement(
                        "strong",
                        null,
                        " бесплатно "
                    ),
                    "!"
                )
            )
        )
        
    )
  }
}

export default HeaderClassJs