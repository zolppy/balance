import { createContext } from "react";
import { ICurrentRemoveTarget } from "./Interface";

export const CurrentRemoveTargetCtx = createContext<
  ICurrentRemoveTarget | undefined
>(undefined);
