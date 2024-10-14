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

export interface ICurrentMovimentationCtx {
  currentMovimentation: IMovimentation;
  setCurrentMovimentation: Dispatch<SetStateAction<IMovimentation>>;
  resetCurrentMovimentationFields: () => void;
}

const CurrentMovimentationCtx = createContext<
  ICurrentMovimentationCtx | undefined
>(undefined);

const CurrentMovimentationProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentMovimentation, setCurrentMovimentation] =
    useState<IMovimentation>({
      id: "",
      date: "",
      value: "",
      reason: "",
      type: MovimentationType.Outcome,
    });

  const resetCurrentMovimentationFields = () => {
    setCurrentMovimentation({
      id: "",
      date: "",
      value: "",
      reason: "",
      type: MovimentationType.Outcome,
    });
  };

  return (
    <CurrentMovimentationCtx.Provider
      value={{
        currentMovimentation,
        setCurrentMovimentation,
        resetCurrentMovimentationFields,
      }}
    >
      {children}
    </CurrentMovimentationCtx.Provider>
  );
};

export { CurrentMovimentationCtx, CurrentMovimentationProvider };

export const useCurrentMovimentation = (): ICurrentMovimentationCtx => {
  const context = useContext(CurrentMovimentationCtx);
  if (!context) {
    throw new Error(
      "useCurrentMovimentation must be used within a CurrentMovimentationProvider"
    );
  }
  return context;
};
