import { awaitGetUser } from '../../awaitRequest'
import s from "../RepoSearch.module.css"


const SearchFormAwait = () => {
  return (
    <form className={s.await} onSubmit={(e)=> awaitGetUser(e)}>
          <h2>С помощью async/await</h2>
          <input name="nickname" type="text" id="query_await" placeholder="никнейм с github" />
          <input type="submit" value="Поиск"/>
      </form>
  )
}

export default SearchFormAwait