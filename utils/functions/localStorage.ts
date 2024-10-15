import { IMovimentation } from "../interfaces/movimentation";

const loadFromStorage = (key: string) => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key) as string);
  }

  return [];
};

const saveToStorage = (key: string, item: IMovimentation[]) =>
  localStorage.setItem(key, JSON.stringify(item));

export { loadFromStorage, saveToStorage };
