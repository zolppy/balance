import { ReactNode, useState } from "react";
import { CurrentRemoveTargetCtx } from "./Ctx";

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

export default CurrentRemoveTargetProvider;
