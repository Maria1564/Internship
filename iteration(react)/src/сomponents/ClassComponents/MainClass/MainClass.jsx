import React from "react";
import "./MainClass.css"

class MainClass extends React.Component {
   


    render() {
        return(
           <>
            <header className="header">
                <div className="header__wrapper">
                    <h1 className="header__title">ТВОЙ ЧЕТВЕРОНОГОЙ ДРУГ!</h1>
                    <p className="header__text">В нашеи приюте ты можешь выбрать себе одного или нескольких питомцев совсем <strong>бесплатно</strong>!</p>
                </div>
            </header>

            <nav className="sidebar">
                <a href="" className="logo sidebar__logo"><img src="https://clck.ru/38uBmz" alt="logo" style={{width: 80, height: 80}}/></a>
                <div className="sidebar__menu">
                    <ul className="sidebar__menu-list">
                        <li className="sidebar__menu-item"><a href="" className="sidebar__menu-link">Главня</a></li>
                        <li className="sidebar__menu-item"><a href="" className="sidebar__menu-link">Наши питомцы</a></li>
                        <li className="sidebar__menu-item"><a href="" className="sidebar__menu-link">Контакты</a></li>
                    </ul>
                </div>
            </nav>
            
            <main className="content">

                <div className="cards">
                    <div className="card">
                        <div className="card__description">
                            <span className="card__name">Тигрик</span>
                            <span className="card__age">2 года</span>
                        </div>
                    </div>
                    <div className="card card--active">
                        <div className="card__description">
                            <span className="card__name">Джессика</span>
                            <span className="card__age">5 месяцев</span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__description">
                            <span className="card__name">Рекс</span>
                            <span className="card__age">1 год</span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__description">
                            <span className="card__name">Чауст</span>
                            <span className="card__age">3.5   года</span>
                        </div>
                    </div>
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