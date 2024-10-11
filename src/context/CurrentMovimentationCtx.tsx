import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { IMovimentation } from "../utils/interfaces/movimentation";
import MovimentationType from "../utils/enums/movimentationType";

interface ICurrentMovimentationCtx {
  currentMovimentation: IMovimentation;
  setCurrentMovimentation: Dispatch<SetStateAction<IMovimentation>>;
}

const CurrentMovimentationCtx = createContext<
  ICurrentMovimentationCtx | undefined
>(undefined);

const useCurrentMovimentationCtx = () => {
  return useContext<ICurrentMovimentationCtx | undefined>(
    CurrentMovimentationCtx
  );
};

const CurrentMovimentationProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentMovimentation, setCurrentMovimentation] =
    useState<IMovimentation>({
      id: "",
      date: "",
      value: 0,
      reason: "",
      type: MovimentationType.Outcome,
    });

  return (
    <CurrentMovimentationCtx.Provider
      value={{ currentMovimentation, setCurrentMovimentation }}
    >
      {children}
    </CurrentMovimentationCtx.Provider>
  );
};

export { useCurrentMovimentationCtx, CurrentMovimentationProvider };
