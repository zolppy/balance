import type { movimentationType } from "../types/movimentation";

export interface IMovimentation {
  id: string;
  date: Date | string;
  value: number | string;
  reason: string;
  type: movimentationType;
}
