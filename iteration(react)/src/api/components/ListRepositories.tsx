import s from "./RepoSearch.module.css"
import SearchFormPromise from './SearchFormPromise/SearchFormPromise'
import SearchFormAwait from './SearchFormAwait/SearchFormAwait'


const ListRepositories = () => {
  
  return (
    <div>
      <h1 className={s.title}>Получение репозиториев пользователя</h1>
      <SearchFormPromise/>
      <ul className="listRepPromise"></ul>
      <SearchFormAwait/>
      <ul className="listRepAwait"></ul>
    </div>
  )
}

export default ListRepositories