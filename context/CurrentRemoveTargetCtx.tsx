import React, {
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

const CurrentRemoveTargetCtx = createContext<ICurrentRemoveTarget | undefined>(
  undefined
);

const useCurrentRemoveTarget = (): ICurrentRemoveTarget => {
  const context = useContext(CurrentRemoveTargetCtx);
  if (!context) {
    throw new Error("");
  }
  return context;
};

const CurrentRemoveTargetProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [removeTargetID, setRemoveTargetID] = useState<string>("");

  return (
    <CurrentRemoveTargetCtx.Provider
      value={{ removeTargetID, setRemoveTargetID }}
    >
      {children}
    </CurrentRemoveTargetCtx.Provider>
  );
};

export { CurrentRemoveTargetProvider, useCurrentRemoveTarget };
