import { createContext, ReactNode, useContext, useState } from "react";
import { dateFormatter } from "../utils/functions/formatter";
import { IMovimentation } from "../utils/interfaces/movimentation";
import {
  loadFromStorage,
  saveToStorage,
} from "../utils/functions/localStorage";
import { MovimentationType } from "../utils/enums/movimentationType";

interface IMovimentationCtx {
  receivedValues: IMovimentation[];
  spentValues: IMovimentation[];
  addMovimentation: (movimentation: IMovimentation) => void;
  removeMovimentation: (id: string) => void;
}

const Movimentation = createContext<IMovimentationCtx | undefined>(undefined);

const useMovimentation = (): IMovimentationCtx => {
  const context = useContext(Movimentation);
  if (!context) {
    throw new Error("");
  }
  return context;
};

const MovimentationProvider = ({ children }: { children: ReactNode }) => {
  const [receivedValues, setReceivedValues] = useState<IMovimentation[]>(
    loadFromStorage("receivedValues")
  );
  const [spentValues, setSpentValues] = useState<IMovimentation[]>(
    loadFromStorage("spentValues")
  );

  const addMovimentation = (movimentation: IMovimentation) => {
    const date = new Date(movimentation.date);

    if (movimentation.type === MovimentationType.Income) {
      const updatedReceivedValues = [
        ...receivedValues,
        {
          ...movimentation,
          id: crypto.randomUUID(),
          date: dateFormatter(
            new Date(date.getTime() + date.getTimezoneOffset() * 60000)
          ),
        },
      ];

      const orderedReceivedValues: IMovimentation[] =
        updatedReceivedValues.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );

      setReceivedValues(orderedReceivedValues);
      saveToStorage("receivedValues", orderedReceivedValues);
    } else {
      const updatedSpentValues = [
        ...spentValues,
        {
          ...movimentation,
          id: crypto.randomUUID(),
          date: dateFormatter(
            new Date(date.getTime() + date.getTimezoneOffset() * 60000)
          ),
        },
      ];

      const orderedSpentValues: IMovimentation[] = updatedSpentValues.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );

      setSpentValues(orderedSpentValues);
      saveToStorage("spentValues", orderedSpentValues);
    }
  };

  const removeMovimentation = (id: string) => {
    const index1 = receivedValues.findIndex(
      (receivedValue) => receivedValue.id === id
    );
    const index2 = spentValues.findIndex((spentValue) => spentValue.id === id);

    if (index1 !== -1) {
      const updatedReceivedValues = receivedValues.filter(
        (receivedValue) => receivedValue.id !== id
      );

      setReceivedValues(updatedReceivedValues);
      saveToStorage("receivedValues", updatedReceivedValues);
    }

    if (index2 !== -1) {
      const updatedSpentValues = spentValues.filter(
        (spentValue) => spentValue.id !== id
      );

      setSpentValues(updatedSpentValues);
      saveToStorage("spentValues", updatedSpentValues);
    }
  };

  return (
    <Movimentation.Provider
      value={{
        receivedValues,
        spentValues,
        addMovimentation,
        removeMovimentation,
      }}
    >
      {children}
    </Movimentation.Provider>
  );
};

export { MovimentationProvider, useMovimentation };
