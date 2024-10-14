import { Dispatch, SetStateAction } from "react";
import { IMovimentation } from "../../utils/interfaces/movimentation";

export interface ICurrentMovimentationCtx {
  currentMovimentation: IMovimentation;
  setCurrentMovimentation: Dispatch<SetStateAction<IMovimentation>>;
  resetCurrentMovimentationFields: () => void;
}
