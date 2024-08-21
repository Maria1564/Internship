export interface ICardPet{
  id: number;
  name: string;
  age: string;
}

export interface IUserInfo {
  message?: string;
  repos_url: string;
}

export interface IRepositoriesGitHub {
  id: number
  full_name: string;
}

export type ContextType = {
  listDogs: ICardPet[],
  idActiveDog: number
  selectIdActiveDog: (id: number) => void 
}

export type CatOrDog = "cat"| 'dog'