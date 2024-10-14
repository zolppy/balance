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

const useCurrentRemoveTargetCtx = () => {
  return useContext<ICurrentRemoveTarget | undefined>(CurrentRemoveTargetCtx);
};

const CurrentRemoveTargetProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [removeTargetID, setRemoveTargetID] = useState<string>("");
  useState<HTMLTableRowElement | null>(null);

  return (
    <CurrentRemoveTargetCtx.Provider
      value={{
        removeTargetID,
        setRemoveTargetID,
      }}
    >
      {children}
    </CurrentRemoveTargetCtx.Provider>
  );
};

export { useCurrentRemoveTargetCtx, CurrentRemoveTargetProvider };
