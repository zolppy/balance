import { useContext } from "react";
import { ICurrentRemoveTarget } from "./Interface";
import { CurrentRemoveTargetCtx } from "./Ctx";

export const useCurrentRemoveTarget = (): ICurrentRemoveTarget => {
  const context = useContext(CurrentRemoveTargetCtx);
  if (!context) {
    throw new Error(
      "useCurrentRemoveTarget must be used within a CurrentRemoveTargetProvider"
    );
  }
  return context;
};
