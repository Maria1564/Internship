
//арифметические операции
const btnRes = document.querySelector(".btn-result")
btnRes.addEventListener("click", ()=>{
    const firstNum = document.getElementById("first-num").value
    const secondNum = document.getElementById("second-num").value
    const operator = document.querySelector("#operator").value.trim()
    let result = document.querySelector(".result")

    if(!firstNum|| !secondNum || !operator) {
        console.log(firstNum)

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
