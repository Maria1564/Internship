interface IRepositoriesGitHub {
  full_name: string;
}

//Получение пользователя
export const getPromise = (username: string): Promise<Response> => {
  return fetch(`https://api.github.com/users/${username}`);
};

//Получение списка репозиториев
export const getRepositories = (url: string, listSelector: string): void => {
  console.log(url);
  fetch(url)
    .then(
      (listRepos: Response): Promise<IRepositoriesGitHub[]> => listRepos.json()
    )
    .then((listRepos) => {
      const list = document.querySelector(listSelector);
      console.log("list rep>> ", listRepos);
      if (!listRepos.length) {
        alert("У пользователя нет репозиториев");
      }

      for (const obj of listRepos) {
        console.log(obj.full_name);
        const li = document.createElement("li");
        li.textContent = obj.full_name;
        console.log(li);
        list!.append(li);
      }
    })
    .catch((err: Error) => alert(err.message));
};
