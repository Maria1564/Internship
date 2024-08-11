import { Component } from "react";
import "./Form.css"

class Form extends Component {
    render(){
        return(
            <form action="" className="form content__form">
            <h3 className="form__title">Заполните форму</h3>
            <div className="form__inputs">
                <input  type="text" id="username" name="username" placeholder="Имя" required/>
    
                <input type="tel" pattern="\+7\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{2}-[0-9]{2}"  name="phone" id="phone" placeholder="+7(___)___-__-__"   required />
        
                <input type="email" name="email" id="email" placeholder="email" required/>
                <textarea  name="about-oneself" id="about-oneself" cols={30} rows={5} required placeholder="Немного о себе и почему заинтересовались питомцем?(после отправки формы мы вам перезвоним)"></textarea>
            </div>
            
            <div className="form__btns">
                <button type="submit" className="btn">Отправить</button>
                <input type="reset" value="Очистить" id="inp-reset"/>
            </div>  
        </form>
        )
    }
}


export default Form