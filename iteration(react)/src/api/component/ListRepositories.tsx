import React from 'react'
import { getUser } from '../promiseRequest'
import s from "./ListRepositories.module.css"
import { awaitGetUser } from '../awaitRequest'


const ListRepositories: React.FC = () => {
  
  return (
    <div>
      <h1 className={s.title}>Получение репозиториев пользователя</h1>
      <form className={s.promise} onSubmit={(e) => getUser(e)}>
          <h2>С помощью Promise</h2>
          <input name="nickname" type="text" id="query_promise" placeholder="никнейм с github" />
          <input type="submit" value="Поиск"/>
      </form>
      <ul className="listRepPromise"></ul>
      <form className={s.await} onSubmit={(e)=> awaitGetUser(e)}>
          <h2>С помощью async/await</h2>
          <input name="nickname" type="text" id="query_await" placeholder="никнейм с github" />
          <input type="submit" value="Поиск"/>
      </form>
      <ul className="listRepAwait"></ul>
    </div>
  )
}

export default ListRepositories