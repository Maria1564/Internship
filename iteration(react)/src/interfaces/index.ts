export interface ICardPet{
  id: number;
  name: string;
  age: string;
}

export interface IUserInfo {
  message?: string;
  repos_url: string;
}

export type CatOrDog = "cat"| 'dog'