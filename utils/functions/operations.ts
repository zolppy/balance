import { IMovimentation } from "./../interfaces/movimentation";

const sumMovimentations = (arr: IMovimentation[]): number =>
  Array.from(arr)
    .map((item) => item.value)
    .reduce((acm, curr) => Number(acm) + Number(curr), 0) as number;

export { sumMovimentations };
