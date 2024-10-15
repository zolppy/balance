import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ICurrentRemoveTarget {
  removeTargetID: string;
  setRemoveTargetID: Dispatch<SetStateAction<string>>;
}

const CurrentRemoveTarget = createContext<ICurrentRemoveTarget | undefined>(
  undefined
);

const useCurrentRemoveTarget = (): ICurrentRemoveTarget => {
  const context = useContext(CurrentRemoveTarget);

  if (!context) {
    throw new Error("");
  }

  return context;
};

const CurrentRemoveTargetProvider = ({ children }: { children: ReactNode }) => {
  const [removeTargetID, setRemoveTargetID] = useState<string>("");

  return (
    <CurrentRemoveTarget.Provider value={{ removeTargetID, setRemoveTargetID }}>
      {children}
    </CurrentRemoveTarget.Provider>
  );
};

export { CurrentRemoveTargetProvider, useCurrentRemoveTarget };
