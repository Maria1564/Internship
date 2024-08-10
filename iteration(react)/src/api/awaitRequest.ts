import { FormEvent } from "react";
import { getRepositories } from "./githubApi";
import { IUserInfo } from "../interfaces";

export const awaitGetUser = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = new FormData(e.currentTarget);
  const username = (form.get("nickname") as string).trim();

  try {
    const list = document.querySelector(".listRepAwait");
    if (list !== null) {
      list.innerHTML = "";
    }

    const res = await fetch(`https://api.github.com/users/${username}`);

    if (res.status === 404) {
      throw new Error("Не удалось получить данные (404)");
    }

    const infoUser: IUserInfo = await res.json();
    if (infoUser?.message) {
      throw new Error("На сервере произошла непредвиденная ошибка (500)");
    }

    const urlRepo = infoUser.repos_url;
    getRepositories(urlRepo, ".listRepAwait");
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("error >> ", error.message);
      alert(error.message);
    }
  }
};
