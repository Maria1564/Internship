
//Получение списка репозиториев
const getRepositories = (url, listSelector)=>{
    console.log(url)
    fetch(url)
    .then(listRepos=>  listRepos.json())
    .then(listRepos=> {
        const list = document.querySelector(listSelector)
        console.log("list rep>> ", listRepos)
    if(!listRepos.length) {
        alert("У пользователя нет репозиториев")
    }
        for (let obj of listRepos){
            console.log(obj.full_name)
            let li = document.createElement("li")
            li.textContent = obj.full_name
            console.log(li)
            list.append(li)
        }
    })
    .catch(err => alert(err.message))
}

// Promise
const getPromise = (username)=>{
    return fetch(`https://api.github.com/users/${username}`)
}

const formPromise = document.querySelector(".promise")
formPromise.addEventListener("submit", (e)=>{
    e.preventDefault()
    const form = new FormData(formPromise)
    const nickname = form.get("nickname").trim()

    const list = document.querySelector(".listRepPromise")
    list.innerHTML =""
    getPromise(nickname)
        .then(resp=> {
            if(resp.status === 404){
                throw new Error("Не удалось получить данные (404)")
            }

            
            return resp.json()
        } )
        .then(infoUser => {
        
            if(infoUser?.message){
                throw new Error("На сервере произошла непредвиденная ошибка (500)")
            }

            const urlRepo = infoUser.repos_url
            getRepositories(urlRepo, ".listRepPromise")
        })
        .catch(err => console.log("err >> ", err.message)|| alert(err.message))
})


// async/await

const funcAwait = async(username)=>{
    try{
        const list = document.querySelector(".listRepAwait")
        list.innerHTML =""

        const res = await fetch(`https://api.github.com/users/${username}`)

        if(res.status === 404){
            throw new Error("Не удалось получить данные (404)")
        }

        const infoUser = await res.json()
        if(infoUser?.message){
            throw new Error("На сервере произошла непредвиденная ошибка (500)")
        }

        const urlRepo = infoUser.repos_url
        getRepositories(urlRepo, ".listRepAwait")
    }catch(error){
        console.log("error >> ", error.message)
        alert(error.message)
    }
}


const formAwait  = document.querySelector(".await")
formAwait.addEventListener("submit", (e)=>{
    e.preventDefault()

    const form = new FormData(formAwait)
    const nickname = form.get("nickname").trim()

    funcAwait(nickname)
})
