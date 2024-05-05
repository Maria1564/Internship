
//арифметические операции
const btnRes = document.querySelector(".btn-result")

btnRes.addEventListener("click", ()=>{
    const firstNum = document.getElementById("first-num").value
    const secondNum = document.getElementById("second-num").value
    const operator = document.querySelector("#operator").value.trim()
    let result = document.querySelector(".result")

    if(!firstNum|| !secondNum || !operator) {

        alert("Не все поля заполнены или заполнены неверно!")
        return
    }

    switch(operator){
        case "+":
            result.textContent = +firstNum + +secondNum
            break
        case "-":
            result.textContent = +firstNum - +secondNum
            break
        case "*":
            result.textContent = Number(firstNum) * Number(secondNum)
            break
        case "/": 
            result.textContent = Number(firstNum) / Number(secondNum)
            break
        default:
            result.textContent = "Что за оператор ты ввёл?... "
    }

})


//работа со строками, вывод в консоль
const form = document.querySelector(".form")

form.addEventListener("click", (e)=>{

    if(e.target.tagName!=="BUTTON" ) return
    if (!form.checkValidity()) return;


    
    const user  = {}
    const name = form.querySelector("#name").value.trim()
    name ? user.name = name : null
    
    
    const age = form.querySelector("#age").value
    user.age = age
    
    const regPhone = new RegExp("\\d\\s\\(\\d\\d\\d\\)\\s\\d\\d\\d") 
    let phone  = form.querySelector("#phone").value
    
    phone =  `${phone.match(regPhone)[0]}-**-**`
    user.phone = phone
    console.group()
    console.log("name >> ", user.name)
    console.log("age >> ", user.age)
    console.log("phone >> ", user.phone)
    console.groupEnd()
    
    const divAboutUser = document.querySelector(".about-user")
    
    //деструктуризация объекта
    const {name: userName ="Аноним", phone: number, ...other} = user

    let pName = document.createElement("p")
    pName.innerHTML = "<b>имя:</b> " + userName
    
    let pAge = document.createElement("p")
    pAge.innerHTML = "<b>возраст:</b> " + other.age
    
    let pPhone = document.createElement("p")
    pPhone.innerHTML = "<b>телефон:</b> " + number
    
    divAboutUser.append(pName, pAge, pPhone)

    e.preventDefault()

    }
)


// присвоение переменных, try...catch
const btnGame = document.querySelector(".game-btn")
const totalAttempts = document.querySelector(".game-total > span")


let result
let randomNumber = Math.floor(Math.random() * 90) + 1

btnGame.addEventListener("click", ()=>{
    if(btnGame.textContent === "заново"){
        result = document.querySelector("#game-number")
        let res = confirm("Точно хотите начать заново?")
        if(res){
            randomNumber = Math.floor(Math.random() * 90) + 1
            totalAttempts.textContent = totalAttempts.textContent && 0
            result.value = ""
            btnGame.textContent="проверить"
        }
    }else {
        try{
            result = document.querySelector("#game-number").value
            console.log(typeof result, result, typeof randomNumber, randomNumber)
            if(result === "" || isNaN(result)){
                throw new Error("Пусто (нет числа) или введена строка")
            }else if(+result !== randomNumber) {
                alert("Другое число загадано")
                totalAttempts.textContent = +totalAttempts.textContent + 1
            }else{
                btnGame.textContent="заново"
                alert("Ураа, угадали)")
            }
        }catch(err){
            alert(`validation Error: ${err.message}`)
        }
    }
})




//наведение и снятие курсора мыши
const imgCat = document.querySelector(".cat-img")

imgCat.addEventListener("mouseover",()=>{
    if(imgCat.src.match("catOne.jpg")){
    imgCat.src = "./img/catTwo.jpg"
    }
})

imgCat.addEventListener("mouseout",()=>{
    if(imgCat.src.match("catTwo.jpg")){
    imgCat.src = "./img/catOne.jpg"
    }
})

//фокус инпута
const word = prompt("Введи любое слово и запомни его, иначе сайт придумает своё слово))","").trim()
const inputMagic = document.getElementById("magic-word")


//стрелочная функция, параметры по умолчанию
const showWord = (word = "Сеть") =>{
    inputMagic.value = word
    inputMagic.disabled = true
    document.querySelector(".magic > label").textContent = "Или всё таки необычный😉"
}

inputMagic.addEventListener("focus", ()=>{
    if(!word) {
        showWord()
    }else{
        showWord(word)
    }
})


//клик, предотвращение работы события, изменение контента определённого элемента
const calendar = document.querySelector(".calendar")
const divEvent = document.querySelector(".calender-event")

calendar.addEventListener("click", (e)=>{
    if(e.target.tagName == "A"){
    e.preventDefault()
    let date = e.target.dataset.date
    let dateEvent = e.target.dataset.event
    divEvent.innerHTML = `
    <h4>${date}</h4>
    <p>${dateEvent !== "ничего" ? `экзамен: ${dateEvent}`:"отдых"}</p>
    `
    divEvent.classList.add("active")
    }

})


//изменение контента
function changeContent(e){
    console.log(e, e.value)
    const text =  document.querySelector(".content > span")
    text.textContent =e.value

}


//spread/rest
const copyReversArr = (nameArr, ...arr) =>{
    let originalArr = `original: ${nameArr} >>[${arr}] `
    const arrCopy = [...arr]
    let reversCopy = `revers copy: ${nameArr} >> [${arrCopy.reverse()}]`

    return {
        originalArr,
        reversCopy
    }
}   

console.log(copyReversArr("numbers", 3, 6, 2, 7, 45, 1))
console.log(copyReversArr("fruits", "banana", "apple", "apricot", "peach"))



const btnGenerate = document.querySelector(".generate-btn")
const listGenerate = document.querySelector(".generate-list")

//генератор (yeald)
function* getItem(){
    yield "вилка",
    yield "коробка",
    yield "кисть (для рисования)",
    yield "карандаш"
    return "мыло"
}

const item = getItem()
btnGenerate.addEventListener("click", () => {
    let {value, done} = item.next()
  
    let li = document.createElement("li")
    li.textContent = value
    listGenerate.append(li)

    if(done) {
        btnGenerate.disabled = true
        return
    }
})

//Класс
const blockRegister = document.querySelector(".register")
const blockLogin = document.querySelector(".auth")
const formReg = document.querySelector(".form-register")
const formAuth = document.querySelector(".form-auth")
blockLogin.style.display = "none"

class User {
    constructor(){
        this.userName =null,
        this.email = null
        this.password = null
        this.isAuth = false
    }
    
    register(name, email, password){
        this.userName  = name
        this.email = email
        this.password = password
        alert("Регистрация прошла успешно")
    }
    
    login(email, password){
        if(this.email !== email || this.password !== password) {
            return alert("Неверный логин или пароль")
            
        }
        
        alert(`${this.userName}, поздравляем! Вы были успешно авторизованы`)
        this.isAuth = true
    }
    
}

let user = null

formReg.addEventListener("submit", (e)=>{
    e.preventDefault()

    user = new User()
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');

    user.register(name, email, password)

    blockRegister.style.display = "none"
    blockLogin.style.display = "block"
})

    
formAuth.addEventListener("submit", (e)=>{
    e.preventDefault()

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    user.login(email, password)

    if(user.isAuth){
        const btnLogin = document.querySelector(".btn-auth")
        btnLogin.disabled = true
    }
})



//super (у объектов)
const bird = {
    aboutBird(){
        console.log("Это птица, она летает")
    }
}

const goose = {
    aboutBird(){
        super.aboutBird()
        console.log("А также щипается, так как этой птицей является гусь")
    }
}


Object.setPrototypeOf(goose, bird)

goose.aboutBird() //Это птица, она летает  А также щипается, так как этой птицей является гусь 

bird.aboutBird() //Это птица, она летает