import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { IMovimentation } from "../utils/interfaces/movimentation";
import { MovimentationType } from "../utils/enums/movimentationType";

interface ICurrentMovimentation {
  currentMovimentation: IMovimentation;
  setCurrentMovimentation: Dispatch<SetStateAction<IMovimentation>>;
  resetCurrentMovimentation: () => void;
}

const CurrentMovimentation = createContext<ICurrentMovimentation | undefined>(
  undefined
);

const useCurrentMovimentation = (): ICurrentMovimentation => {
  const context = useContext(CurrentMovimentation);

  if (!context) {
    throw new Error("");
  }

  return context;
};

const CurrentMovimentationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const initialValue: IMovimentation = {
    id: "",
    date: "",
    value: "",
    reason: "",
    type: MovimentationType.Outcome,
  };

  const [currentMovimentation, setCurrentMovimentation] =
    useState<IMovimentation>(initialValue);

  const resetCurrentMovimentation = () => setCurrentMovimentation(initialValue);

  return (
    <CurrentMovimentation.Provider
      value={{
        currentMovimentation,
        setCurrentMovimentation,
        resetCurrentMovimentation,
      }}
    >
      {children}
    </CurrentMovimentation.Provider>
  );
};

export { CurrentMovimentationProvider, useCurrentMovimentation };
