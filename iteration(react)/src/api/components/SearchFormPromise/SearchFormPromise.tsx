import { getUser } from '../../promiseRequest'
import s from "../RepoSearch.module.css"

const FormPromise= () => {
  return (
    <form className={s.promise} onSubmit={(e) => getUser(e)}>
        <h2>С помощью Promise</h2>
        <input name="nickname" type="text" id="query_promise" placeholder="никнейм с github" />
        <input type="submit" value="Поиск"/>
    </form>
  )
}

export default FormPromise