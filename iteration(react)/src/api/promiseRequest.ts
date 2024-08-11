import { FormEvent } from "react";
import { getPromise, getRepositories } from "./githubApi";
import { IUserInfo } from "../interfaces";

export const getUser = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = new FormData(e.currentTarget);
  const nickname = (form.get("nickname") as string).trim();

  const list = document.querySelector(".listRepPromise");

  if (list !== null) {
    list.innerHTML = "";
    getPromise(nickname)
      .then((resp: Response): Promise<IUserInfo> => {
        if (resp.status === 404) {
          throw new Error("Не удалось получить данные (404)");
        }

        return resp.json();
      })
      .then((infoUser) => {
        if (infoUser?.message) {
          throw new Error("На сервере произошла непредвиденная ошибка (500)");
        }
        const urlRepo = infoUser.repos_url;
        getRepositories(urlRepo, ".listRepPromise");
      })
      .catch((err: unknown) => {
        if (err instanceof Error) {
          alert(err.message);
        }
      });
  }
};
