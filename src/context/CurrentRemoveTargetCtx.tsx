import {
  createContext,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
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
    throw new Error(
      "useCurrentRemoveTarget must be used within a CurrentRemoveTargetProvider"
    );
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
