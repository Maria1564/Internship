import { FormEvent, useEffect, useState } from "react";
import s from "../RepoSearch.module.css";
import {
  fetchUserRepos,
  repositoriesSliceState,
} from "../../../store/slices/repositories";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { IRepositoriesGitHub } from "../../../interfaces";

const SearchFormAwait = () => {
  const [repositories, setRepositories] = useState<IRepositoriesGitHub[]>([]);

  const { listRepos, error, loading} = useSelector<RootState, repositoriesSliceState>(
    (state) => state.repositories
  );
  const dispatch = useDispatch<AppDispatch>();

  const awaitGetUserRepo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const username = (form.get("nickname") as string).trim();

    dispatch(fetchUserRepos(username));
  };

  useEffect(() => {
    setRepositories(listRepos);
  }, [listRepos]);


  return (
    <form className={s.await} onSubmit={(e) => awaitGetUserRepo(e)}>
      <h2>С помощью async/await</h2>
      <input
        name="nickname"
        type="text"
        id="query_await"
        placeholder="никнейм с github"
      />
      <input type="submit" value="Поиск" />
      <ul>
        {repositories?.map((elem) => (
          <li key={elem.id}>{elem.full_name}</li>
        ))}
      </ul>
      {(!repositories.length && !loading && ! error) && <p>У пользователя нет репозиториев</p>}
      {(error && !loading) && <h3 style={{color: "red"}}>{error}</h3>}
    </form>
  );
};

export default SearchFormAwait;
