
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
    user.name = name
    
    const age = form.querySelector("#age").value
    user.age = age
    
    const regPhone = new RegExp("\\d\\s\\(\\d\\d\\d\\)\\s\\d\\d\\d") 
    let phone  = form.querySelector("#phone").value
    
    phone =  `${phone.match(regPhone)[0]}-**-**`
    user.phone = phone  
    console.log("user >> ", user)
    console.group()
    console.log("name >> ", user.name)
    console.log("age >> ", user.age)
    console.log("phone >> ", user.phone)
    console.groupEnd()
    
    const divAboutUser = document.querySelector(".about-user")
    
    let pName = document.createElement("p")
    pName.innerHTML = "<b>имя:</b> " + user.name
    
    let pAge = document.createElement("p")
    pAge.innerHTML = "<b>возраст:</b> " + user.age
    
    let pPhone = document.createElement("p")
    pPhone.innerHTML = "<b>телефон:</b> " + user.phone
    
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