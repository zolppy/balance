import { createContext } from "react";
import { IMovimentationCtx } from "./Interface";

export const MovimentationCtx = createContext<IMovimentationCtx | undefined>(
  undefined
);
