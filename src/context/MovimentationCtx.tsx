import { createContext, ReactNode, useContext, useState } from "react";
import { IMovimentation } from "../utils/interfaces/movimentation";
import MovimentationType from "../utils/enums/movimentationType";
import { dateFormatter } from "../utils/functions/formatter";
import {
  loadFromStorage,
  saveToStorage,
} from "../utils/functions/localStorage";

interface IMovimentationCtx {
  receivedValues: IMovimentation[];
  spentValues: IMovimentation[];
  addMovimentation: (movimentation: IMovimentation) => void;
  removeMovimentation: (id: string) => void;
}

const MovimentationCtx = createContext<IMovimentationCtx | undefined>(
  undefined
);

const useMovimentationCtx = () => {
  return useContext<IMovimentationCtx | undefined>(MovimentationCtx);
};

const MovimentationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [receivedValues, setReceivedValues] = useState<IMovimentation[]>(
    loadFromStorage("receivedValues")
  );
  const [spentValues, setSpentValues] = useState<IMovimentation[]>(
    loadFromStorage("spentValues")
  );

  const addMovimentation = (movimentation: IMovimentation) => {
    if (movimentation.type === MovimentationType.Income) {
      const updatedReceivedValues = [
        ...receivedValues,
        {
          ...movimentation,
          id: crypto.randomUUID(),
          date: dateFormatter(new Date(movimentation.date)),
        },
      ];

      setReceivedValues(updatedReceivedValues);
      saveToStorage("receivedValues", updatedReceivedValues);
    } else {
      const updatedSpentValues = [
        ...spentValues,
        {
          ...movimentation,
          id: crypto.randomUUID(),
          date: dateFormatter(new Date(movimentation.date)),
        },
      ];

      setSpentValues(updatedSpentValues);
      saveToStorage("spentValues", updatedSpentValues);
    }
  };

  const removeMovimentation = (id: string) => {
    console.log(id);
  };

  return (
    <MovimentationCtx.Provider
      value={{
        receivedValues,
        spentValues,
        addMovimentation,
        removeMovimentation,
      }}
    >
      {children}
    </MovimentationCtx.Provider>
  );
};

export { useMovimentationCtx, MovimentationProvider };